export function lilDim(value){
  if(typeof value === 'string')
    return value;
  else {
    return `${parseFloat(value) * 12}px`;
  }
}

export function coerceColorExprToHex(p, keyOrLiteral){
  const valueInTheme = p.theme.colors[keyOrLiteral];
  if(valueInTheme) return valueInTheme;
  const literalIsHex = keyOrLiteral.includes('#');
  return literalIsHex ? keyOrLiteral : colNameToHex(keyOrLiteral);
}

export function easyColor(p, keyOrLiteral, backupKeyOrLiteral){
  if(keyOrLiteral) return coerceColorExprToHex(p, keyOrLiteral);
  return coerceColorExprToHex(p, backupKeyOrLiteral);
}

export function coerceDim(intOrStr){
  if(!(typeof intOrStr === 'string'))
    intOrStr = intOrStr.toString();
  if(!(intOrStr.includes("%") || intOrStr.includes("px"))){
    return `${intOrStr}px`;
  }
  else return intOrStr;
}

export function hexToRgb(hex) {
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g)
  .map(x => parseInt(x, 16))
}

function colNameToHex(color) {
  if(!color) return null;
  const colours = {
    "azure":"#f0ffff",
    "black":"#000000","blue":"#0000ff",
    "cadetblue":"#5f9ea0","coral":"#ff7f50",
    "darkgray":"#a9a9a9","darkgreen":"#006400",
    "darkorange":"#ff8c00","darkred":"#8b0000",
    "red":"#ff0000", "violet":"#ee82ee",
    "white":"#ffffff", "yellow":"#ffff00"};
  return colours[color.toLowerCase()];
}
