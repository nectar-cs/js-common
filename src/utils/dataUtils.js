import humanizeString from "humanize-string";

function periodDicts2Series(dicts, xKey='period'){
  if(!dicts || dicts.length < 1) return [];

  const yKeys = Object.keys(dicts[0]).filter(k => k !== xKey);
  return yKeys.sort().reverse().map(yKey => ({
    id: humanizeString(yKey),
    color: 'red',
    data: dicts.map(dict =>({ x: dict[xKey], y: dict[yKey] }))
  }));
}

function obj2UrlParams(obj, prefix): string {
  let str = [], p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      let k = prefix ? `${prefix}[${p}]` : p;
      const v = obj[p];

      const isArray = v !== null && Array.isArray(v);
      const isDict = !isArray && v !== null && typeof v === "object";

      if(isDict){
        str.push(obj2UrlParams(v, k))
      } else if( isArray){
        k = `${k}[]`;
        (v || []).forEach(opt => {
          str.push(encodeURIComponent(k) + "=" + encodeURIComponent(opt));
        })
      } else {
        str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
  }
  return str.join("&");
}

function arrayRepl(array, index, newEl): Array{
  return array.map((el, i) => i === index ? newEl : el);
}

function arrayRm(array, index): Array {
  return array.filter((el, i) => i !== index);
}

export default {
  periodDicts2Series,
  obj2UrlParams,
  arrayRm,
  arrayRepl
}
