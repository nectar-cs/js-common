const GCP_BASE = "https://storage.googleapis.com/";
const IMG_BASE = GCP_BASE + "nectar-mosaic-public/images";

export default class NectarGuiUtils{
  static image(name){
    return name && `${IMG_BASE}/${name}`;
  }

  static name2emotion(status){
    switch ((status || '').toLowerCase()) {
      case('running'): return 'cool';
      case('broken'): return 'warning2';
      case('installing'): return 'innocent';
      default: return 'primaryColor';
    }
  }

  static findCrtIndex(routes, location, seekIndex){
    const parts = location.pathname.split('/');

    if(seekIndex == null)
      seekIndex = parts.length - 1;

    const interest = parts[seekIndex] || '';
    return routes.findIndex(r => `/${interest}` === r.path);
  }
}

function hex2PureRgb(hex){
  return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g)
  .map(x => parseInt(x, 16));
}

function pureRgb2Hex(rgbArray){
  return '#' + rgbArray.map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');
}

function findInHexGradient(startHex, endHex, fraction) {
  return findInRgbGradient(
    hex2PureRgb(startHex),
    hex2PureRgb(endHex),
    fraction
  )
}

function findInRgbGradient(startRgb, endRgb, frac) {
  const w2 = 1 - frac;
  const rounder = i => Math.round(startRgb[i] * frac + endRgb[i] * w2);
  return [ rounder(0), rounder(1), rounder(2) ];
}

export const nuiUtils = {
  hex2PureRgb,
  pureRgb2Hex,
  findInHexGradient,
  findInRgbGradient
}
