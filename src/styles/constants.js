// noinspection NpmUsedModulesInstalled
import {css} from 'styled-components'
import {lilDim, easyColor, coerceDim, hexToRgb} from "./utils";

export const colorKeys = {
  primaryFont: 'primaryFont',
  secondaryFont: 'secondaryFont',
  calm: 'secondaryFont',

  primaryColor: 'primaryColor',
  dumbName: 'primaryColor',

  primaryFontLess: 'primaryFontLess',
  contrastColor: 'contrastColor',
  contrastFont: 'contrastFont',
  contrastFontSecondary: 'contrastFont',
  secondaryColor: 'secondaryColor',

  contentBackgroundColor: 'contentBackgroundColor',
  itemBackgroundColor: 'itemBackgroundColor',

  disabled: 'disabled',
  excited: 'excited',
  nectar: 'nectar',
  cool: 'cool',
  error: "error",
  warning: 'warning',
  warning2: 'warning2',
  success: 'success',
  pleasant: 'pleasant',

  transparent: 'transparent',
  none: 'transparent',

  calmTextBkg: 'calmTextBkg'
};

export const theme = {
  colors: {
    [colorKeys.primaryFont]: "#233142",
    [colorKeys.secondaryFont]: "#5c6070",
    [colorKeys.contrastFont]: "#FFFFFF",
    [colorKeys.contrastFont]: "#FFFFFF",

    [colorKeys.primaryColor]: "#233142",
    [colorKeys.primaryFontLess]: "#5c6070",
    [colorKeys.contrastColor]: '#FFFFFF',

    [colorKeys.secondaryColor]: "#455D7A",
    [colorKeys.excited]: "#fc395b",
    [colorKeys.nectar]: "#fc395b",
    [colorKeys.cool]: "#009384ff",
    [colorKeys.contentBackgroundColor]: "#f5f7fb",
    [colorKeys.itemBackgroundColor]: "#FFFFFF",

    [colorKeys.pleasant]: "#535b77",
    [colorKeys.success]: "#326342",
    [colorKeys.error]: "#DB3A34",
    [colorKeys.warning]: "#F6AE2D",
    [colorKeys.disabled]: "#cecece",
    [colorKeys.warning2]: "#f46036",
    [colorKeys.calmTextBkg]: "#f2f7f2",
    [colorKeys.transparent]: "transparent",
    ruby: "#D81E5B",
    tart: "#F0544F",
    coffee: "#3A3335",
    comfy: "#6153cc",
    calmBeige: "#F5F1ED",
    soothing: "#f7f6f6",
    primaryBkg: "#2a2b2a",
    panelGrey: "#f7f6f6",
    panelGrey2: '#fafafa',
    lightestGrey: "#ebebeb",
    lightGrey: "#d6d6d6",
    hipBlue: "#0c63e7",
    grey2: "#fafafa",
    grey3: "#DCDCDC",
    grey4: "#e7e1e1",
    cool2: "#038074",
    milGreen: "#698F3F"
  },

  dims: {
    topBarHeight: "55px",
    sideBarWidth: "220px",
    borderRadius: "6px",
    borderWidth: "1px",
    inputBorderWidth: 1.3
  },

  font: {
    family: "'Inter', sans-serif",
    size: '12px',
    promoSize: '16px'
  }
};

export const inverseTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    [colorKeys.primaryFont]: theme.colors.contrastFont,
    [colorKeys.secondaryFont]: theme.colors.disabled,

    [colorKeys.primaryColor]: theme.colors.contrastColor,
    [colorKeys.contrastColor]: theme.colors.primaryColor,
    [colorKeys.contrastFont]: theme.colors.primaryFont,

    [colorKeys.excited]: theme.colors.cool,
    [colorKeys.cool]: theme.colors.excited,
  }
};

export const noTopBarTheme = {
  ...theme,
  dims: {
    ...theme.dims,
    topBarHeight: 0
  }
}

export const noSideBarTheme = {
  ...theme,
  dims: {
    ...theme.dims,
    sideBarWidth: 0,
  },
  font: {
    ...theme.font,
    size: '13px',
    family: "'Lato', sans-serif",
  }
}





/*--------------------MIXINS---------------------*/

const corners = ['top', 'right', 'bottom', 'left'];

function blinking(p){
  if(p.blink){
    const fromCol = resolveColor(p, p.blinkFrom, colorKeys.contrastFont);
    const toCol = resolveColor(p, p.blinkTo, colorKeys.disabled);
    return css`
      animation-name: blink-animation;
      animation-duration: .15s;
      animation-iteration-count: 2;
      animation-timing-function: ease-in-out;
      @keyframes blink-animation {
        from { background: ${fromCol}; }
        to { background: rgba(0, 148, 133, 0.4); }
      }
    `;
  }
}

function rotating(p){
  if(p.rotating){
    return(
      css`
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
        @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
        @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
        @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
      `
    )
  }
}

export function centered(p){
  if(p.centered){
    if(p.absolute){
      return css`
        left: 50%;
        transform: translateX(-50%);
      `;
    } else {
      return css`
        margin-left: auto;
        margin-right: auto;
        display: block;
      `;
    }
  }
}

export function noDec(p, defaults={}){
  if({...defaults, ...p}['nodec']){
    return css`
      text-decoration: none;
    `;
  }
}

function centerLow(p) {
  if(p.centerLow){
    return css`
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
    `;
  }
}

export const commonSizeAttrs = css`
  margin-top: ${p => lilDim(p.mt)};
  margin-right: ${p => lilDim(p.mr)};
  margin-bottom: ${p => lilDim(p.mb)};
  margin-left: ${p => lilDim(p.ml)};
  border-radius: ${p => borderRounding(p)};
  padding: ${p => simplePadding(p)};
  ${p => heightAndWidth(p)}
  ${p => centered(p)};
  ${p => centerLow(p)};
  ${p => blinking(p)};
  ${p => absolutePositioning(p)};
  ${p => hover(p)};
  ${p => sexyShadow(p)};
  ${p => rotating(p)};
  ${p => pulse(p)};
  ${p => floating(p)};    
  ${p => borderStyles(p)};
`;

export const commonFontAttrs = css`
  font-family: ${p => resolveFontFam(p)};
  color: ${p => resolveColor(p, p.emotion, colorKeys.primaryFont)};
  background: ${p => resolveColor(p, p.bkgEmotion, null)};
  font-weight: ${p => textWeight(p)};
  text-align: ${p => textAlign(p)};
  font-size: ${p => fontSize(p)};
  display: ${p => textDisplay(p)};
  visibility: ${p => textVisibility(p)};
  ${p => noDec(p)};
  ${p => hacker(p)};
`;








/*--------------------UTILS---------------------*/


export function resolveFontFam(p){
  return `${p.fontFam || p.theme.font.family}`;
}


export function heightAndWidth(p, defaults={}){
  const merged = {...defaults, ...p};
  const total = [];
  if(merged.wh){
    let width, height;
    if(typeof merged.wh === 'string')
      [width, height] = merged.wh.split(" ");
    else width = merged.wh;
    total.push(`width: ${lilDim(width)};`);
    total.push(`height: ${lilDim(height == null ? width : height)};`);
  }
  if(merged.height) total.push(`height: ${lilDim(merged.height)};`);
  if(merged.width) total.push(`width: ${lilDim(merged.width)};`);
  if(merged.minHeight) total.push(`min-height: ${lilDim(merged.minHeight)};`);
  if(merged.minWidth) total.push(`min-width: ${lilDim(merged.minWidth)};`);
  if(merged.maxHeight) total.push(`max-height: ${lilDim(merged.maxHeight)};`);
  if(merged.maxWidth) total.push(`max-width: ${lilDim(merged.maxWidth)};`);
  if(total.length > 0)
    return css`
      ${total.join("\n")}
    `;
}

function floating(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.flt){
    return css`
      float: ${merged.flt};
    `;
  }
}

function hacker(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.hacker){
    return css`
      font-family: "Courier 10 Pitch", monospace;
    `;
  }
}

export function hover(p, defaults={}){
  let total = [];
  const merged = {...(defaults || {}), ...p};
  if(merged.hoverEmotion){
    total.push(`
      &:hover{
        color: ${easyColor(p, p.hoverEmotion)} !important;
      }
    `)
  }

  if(merged.hoverBkgEmotion){
    total.push(`
      &:hover{
        background: ${easyColor(p, p.hoverBkgEmotion)};
      }
    `)
  }

  if(merged.hoverPoint){
    total.push(`
      &:hover{
        cursor: pointer;
      }
    `)
  }

  if(merged.hoverUnderline){
    total.push(`
      &:hover{
        text-decoration: underline;
      }
    `)
  }
  return total.join("\n");
}

export function borderStyles(p, defaults={}){
  const merged = {...defaults, ...p};
  const { borderWidth, borderEmotion, borderRadius, borderStyle } = merged;
  if(merged.ignore) return null;

  const total = [];

  if(borderEmotion){
    total.push(`border-color: ${easyColor(p, p.borderEmotion)};`);
    total.push('border-style: solid;');
  }

  if(borderWidth){
    total.push(`border-width: ${borderWidth};`);
    total.push('border-style: solid;');
  }

  if(borderRadius)
    total.push(`border-radius: ${lilDim(borderRadius)};`);

  if(borderStyle)
    total.push(`border-style: ${lilDim(borderStyle)};`);

  if(total.length > 0){
    return css`
      ${total.join("\n")}
  `;
  }
}

function pulse(p){
  if(p.pulse){
    const baseColor = easyColor(p, p.pulseColor, colorKeys.primaryColor);
    const color = hexToRgb(baseColor);
    const op = val => `rgba(${color.toString()}, ${val.toString()})`;

    return(
      css`
        animation: pulse 2s infinite;
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 ${op(.5)}; }
          70% { box-shadow: 0 0 0 5px ${op(0)}; }
          100% { box-shadow: 0 0 0 0 ${op(0)}; }
        }
      `
    );
  }
}

export function sexyShadow(p, defaults={}){
  const merged =  {...defaults, ...p};
  if(merged.sexyShadow){
    const opacity = merged.shadowOpacity || .2;
    return css`
      box-shadow: 0 0 14px 0 rgba(42,43,42, ${opacity});
    `
  }
}

export function heavyShadow(p, defaults={}){
  if({...defaults, ...p}.heavyShadow){
    return css`
      box-shadow: 0px 0px 14px 0px rgba(42,43,42,0.3);
    `
  }
}

function absolutePositioning(p, defaults){
  const props = {...defaults, ...p};
  let total = [];

  if(props.absolute)
    total.push(`position: absolute;`);

  else if(props.relative)
    total.push(`position: relative;`);

  else if (props.trbl){
    const parts = props.trbl.split(" ");
    corners.forEach((corner, i) => {
      total.push(`${corner}: ${coerceDim(parts[i])};`);
    });
  }
  corners.forEach(corner => {
    if(Object.keys(props).includes(corner)) {
      total.push(`${corner}: ${lilDim(props[corner])};`);
    }
  });
  if(total.length > 0)
    return css`
      ${total.join("\n")}
    `
}

export function simplePadding(p, defaults={}){
  const [vertMultiplier, horMultiplier] = [5, 14];
  const merged = {...defaults, ...p};
  const vertSwell = merged.vertSwell || merged.swell || (merged.padded ? 1.8 : null);
  const horSwell = merged.horSwell || merged.swell || (merged.padded ? 1 : null);
  const vertPadding = vertSwell !== null ? `${vertMultiplier * vertSwell}px` : 'default';
  const horPadding = horSwell !== null ? `${horMultiplier * horSwell}px` : 'default';
  return `${vertPadding} ${horPadding}`;
}

export function borderRounding(p, defaults={}){
  const defaultApplier = x => x;
  const merged = {...defaults, ...p};
  const funky = merged.funky ? 25 : null;
  const sofa = merged.sofa ? 8 : null;
  const swell = funky || sofa || merged.rounding;
  const finalValue = swell !== null ? `${swell}px` : 'default';
  return (merged.applier || defaultApplier)(finalValue);
}

export function resolveColorKey(props, colorKey, backupColorKey){
  if(props.calm) return colorKeys.calm;
  return colorKey || backupColorKey;
}

export function resolveColor(props, colorKey, backupColorKey){
  if((colorKey || "").includes("#"))
    return colorKey;

  if(backupColorKey || colorKey){
    const resolvedKey = resolveColorKey(props, colorKey, backupColorKey);
    return props.theme.colors[resolvedKey] || colorKey || backupColorKey;
  } else return "inherit";
}

function contrastFontKeyForBkg(props, colorKey, backupColorKey){
  const bkgColorKey = resolveColorKey(props, colorKey, backupColorKey);
  switch (bkgColorKey) {
    case colorKeys.disabled:
    case colorKeys.contrastColor:
    case colorKeys.calmTextBkg:
    case colorKeys.contentBackgroundColor:
      return colorKeys.primaryFont;
    default: return colorKeys.contrastFont;
  }
}

export function contrastFontForBkg(props, colorKey, backupColorKey){
  const finalKey = contrastFontKeyForBkg(props, colorKey, backupColorKey);
  return props.theme.colors[finalKey];
}

function textVisibility(p){
  return p.invisible ? "hidden" : "visible";
}

export function overflowScroll(p, defaults={}){
  if({...defaults, ...p}.scroll){
    return css`
      overflow: scroll;
    `
  }
}

function textWeight(p){
  if(p.bold) return "bold";
  else return p.weight || "normal";
}

function textAlign(p){
  if(p.center) return 'center';
  if(p.right) return 'right';
  return 'left';
}

export function fontSize(p, backup){
  if(p.promo) return p.theme.font.promoSize;
  else return p.fontSize || backup || p.theme.font.size;
}

function textDisplay(p){
  if(p.iblock) return "inline-block";
  else if(p.block) return "block";
  return "default";
}
