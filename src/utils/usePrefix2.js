import {useLocation} from "react-router";
import {useEffect, useState} from "react";

export function usePrefix2(props: Props){

  const { max, hot } = props || {};

  const location = useLocation();
  let fullPath: string = location.pathname;
  let [prefix, setPrefixInternally] = useState(fullPath);

  if(fullPath.endsWith("/"))
    fullPath = fullPath.substring(0, fullPath.length - 1);

  let fullPathLength = fullPath.split("/").length;
  if(fullPath.startsWith("/"))
    fullPathLength = fullPathLength - 1;

  useEffect(_  => {
    if(hot){
      setPrefixInternally(location.pathname);
    }
  }, [location.pathname]);

  if(prefix.endsWith("/")){
    // console.log(`PREFIX END ${prefix} ---> ${prefix.substring(0, prefix.length - 1)}`)
    prefix = prefix.substring(0, prefix.length - 1);
  }

  if(max != null){
    let _parts = prefix.split('/');
    if(!_parts[0]) _parts = _parts.slice(1, _parts.length);
    prefix = `/${_parts.slice(0, max).join('/')}`;
  }

  const dirtyParts = prefix.split("/");
  const parts: [string] = prefix.split("/").slice(1, dirtyParts.length);

  function pathUpTo(count){
    const remainingParts = parts.slice(0, count);
    return `/${remainingParts.join('/')}`;
  }

  function strip(count) {
    const remainingParts = parts.slice(0, parts.length - count);
    return `/${remainingParts.join('/')}`;
  }

  function partFromEnd(count){
    return parts[parts.length - 1 - count];
  }

  const rightMost = parts[parts.length - 1];

  return {
    prefix,
    prefixLength: parts.length,
    strip,
    pathUpTo,
    parts,
    rightMost,
    fullPath,
    fullPathLength,
    partFromEnd
  }
}

type Props = {
  max: number
}
