export function lilDim(value){
  if(typeof value === 'string')
    return value;
  else {
    return `${parseFloat(value) * 12}px`;
  }
}

export function coerceColorExprToHex(theme, keyOrLiteral){
  const valueInTheme = theme.colors[keyOrLiteral];
  if(valueInTheme)
    return valueInTheme;
  const literalIsHex = (keyOrLiteral || '').includes('#');
  return literalIsHex ? keyOrLiteral : colNameToHex(keyOrLiteral);
}

export function easyColor(p, keyOrLiteral, backupKeyOrLiteral){
  if(keyOrLiteral) return coerceColorExprToHex(p.theme, keyOrLiteral);
  return coerceColorExprToHex(p.theme, backupKeyOrLiteral);
}

export function easyColor2(theme, keyOrLiteral, backupKeyOrLiteral){
  if(keyOrLiteral) return coerceColorExprToHex(theme, keyOrLiteral);
  return coerceColorExprToHex(theme, backupKeyOrLiteral);
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

export function shadeColor(color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;
  G = (G<255)?G:255;
  B = (B<255)?B:255;

  let RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
  let GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
  let BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}
