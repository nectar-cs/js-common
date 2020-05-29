import {css} from 'styled-components'

export const colorKeys = {
  primaryFont: 'primaryFont',
  secondaryFont: 'secondaryFont',
  calm: 'secondaryFont',

  primaryColor: 'primaryColor',
  dumbName: 'primaryColor',

  primaryFontLess: 'primaryFontLess',
  contrastColor: 'contrastColor',
  contrastFont: 'contrastFont',
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
    comfy: "#6153cc",
    [colorKeys.calmTextBkg]: "#f2f7f2",

    [colorKeys.transparent]: "transparent",
  },

  dims: {
    topBarHeight: "0px",
    sideBarWidth: "220px",
    borderRadius: "6px",
    borderWidth: "1px",
    inputBorderWidth: 1.3
  },
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






/*--------------------MIXINS---------------------*/


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
  margin-top: ${p => `${(p.mt || 0) * 12}px`};
  margin-right: ${p => `${(p.mr || 0) * 12}px`};
  margin-bottom: ${p => `${(p.mb || 0) * 12}px`};
  margin-left: ${p => `${(p.ml || 0) * 12}px`};
  border-radius: ${p => borderRounding(p, {})};
  padding: ${p => simplePadding(p)};
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  ${p => centered(p)};
  ${p => centerLow(p)};
  ${p => blinking(p)};
  ${p => absolutePositioning(p)};
  ${p => hover(p)};
  ${p => sexyShadow(p)};  
`;

export const commonFontAttrs = css`
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

function hacker(p, defaults={}){
  const merged = {...defaults, ...p};
  if(merged.hacker){
    return css`
      font-family: "Courier 10 Pitch", monospace;
    `;
  }
}

function hover(p){
  let total = [];
  if(p.hoverPoint){
    total.push(`
      &:hover{
        cursor: pointer;
      }
    `)
  }
  if(p.hoverUnderline){
    total.push(`
      &:hover{
        text-decoration: underline;
      }
    `)
  }
  return total.join("\n");
}

function sexyShadow(p){
  if(p.sexyShadow){
    return css`
      box-shadow: 0 0.063em 
      0.313em 0 
      rgba(0,0,0,.07), 
      0 0.438em 
      1.063em 0
       rgba(0,0,0,.07);
    `
  }
}

function absolutePositioning(p, defaults){
  const props = {...defaults, ...p};
  let total = [];
  if(props.absolute) total.push(`position: absolute;`);
  else if(props.relative) total.push(`position: relative;`);
  ['top', 'right', 'bottom', 'left'].forEach(x => {
    if(Object.keys(props).includes(x)) {
      total.push(`${x}: ${coerceDim(props[x])};`);
    }
  });
  return total.join("\n");
}

export function noDec(p, defaults={}){
  if({...defaults, ...p}['nodec']){
    return css`
      text-decoration: none;
    `;
  }
}

function coerceDim(intOrStr){
  if(!(typeof intOrStr === 'string'))
    intOrStr = intOrStr.toString();
  if(!(intOrStr.includes("%") || intOrStr.includes("px"))){
    return `${intOrStr}px`;
  }
  else return intOrStr;
}

export function simplePadding(p, defaults){
  const [vertMultiplier, horMultiplier] = [5, 14];
  const merged = {...defaults, ...p};
  const vertSwell = merged.vertSwell || merged.swell || (merged.padded ? 1.8 : null);
  const horSwell = merged.horSwell || merged.swell || (merged.padded ? 1 : null);
  const vertPadding = vertSwell !== null ? `${vertMultiplier * vertSwell}px` : 'default';
  const horPadding = horSwell !== null ? `${horMultiplier * horSwell}px` : 'default';
  return `${vertPadding} ${horPadding}`;
}

export function borderRounding(p, defaults){
  const merged = {...p, ...defaults};
  const funky = (merged.funky ? 25 : null);
  const sofa = (merged.sofa ? 8 : null);
  const swell = funky || sofa || merged.rounding;
  return swell !== null ? `${swell}px` : 'default';
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
    return props.theme.colors[resolvedKey];
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
  return p.fontSize || backup || '13px';
}

function textDisplay(p){
  if(p.iblock) return "inline-block";
  else if(p.block) return "block";
  return "default";
}
