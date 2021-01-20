import {useState} from "react";

export default function useReloadSalt(){
  const [reloadSalt, setReloadSalt] = useState(null);

  const reload = _ => setReloadSalt(Math.random());

  return [reloadSalt, reload];
}
