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
  warning: 'warning',
  success: 'success',
  pleasant: 'pleasant',

  transparent: 'transparent',
  none: 'transparent'
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
    [colorKeys.warning]: "#F6AE2D",
    [colorKeys.disabled]: "#cecece",

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

function merger(props, defaults){
  Object.keys(defaults).forEach(key => {
    if(!props[key])
      props[key] = defaults[key];
  });
  return props;
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
  border-radius: ${p => borderRounding(p, 4, 0)};
  padding: ${p => p.padded ? "10px" : 'default'};
  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};
  ${p => centered(p)};
  ${p => centerLow(p)};
`;

export const commonFontAttrs = css`
  color: ${p => resolveColor(p, p.emotion, colorKeys.primaryFont)};
  background: ${p => resolveColor(p, p.bkgEmotion, null)};
  font-weight: ${p => textWeight(p)};
  text-align: ${p => textAlign(p)};
  font-size: ${p => textSize(p)};
  display: ${p => textDisplay(p)};
  visibility: ${p => textVisibility(p)};
`;

// export bkgEmotion(p){
//   if(p.bkgEmotion){
//     return css`
//       background: ${p => resolveColor(p, p.bkgEmotion)};
//     `;
//   }
// }

export function experiment(props, defaults){
  Object.keys(defaults).forEach(key => {
    props[key] = props[key] || defaults[key];
  });


}








/*--------------------UTILS---------------------*/



export function simplePadding(p, vertDefault, horDefault){
  const vertSwell = p.vertSwell || p.swell || 1;
  const horSwell = p.horSwell || p.swell || 1;
  return `${vertDefault * vertSwell}px ${horDefault * horSwell}px`;
}

export function resolveColorKey(props, colorKey, backupColorKey){
  if(props.calm) return colorKeys.calm;
  return colorKey || backupColorKey;
}

export function resolveColor(props, colorKey, backupColorKey){
  if(backupColorKey || colorKey){
    const resolvedKey = resolveColorKey(props, colorKey, backupColorKey);
    return props.theme.colors[resolvedKey];
  } else return "inherit";
}


function contrastFontKeyForBkg(props, colorKey, backupColorKey){
  const bkgColorKey = resolveColorKey(props, colorKey, backupColorKey);
  switch (bkgColorKey) {
    case colorKeys.disabled:
    case colorKeys.nectar:
    case colorKeys.contrastColor:
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

function textSize(p){
  if(p.kind === 'little-title') return '16px';
  return 'default';
}

function textDisplay(p){
  if(p.iblock) return "inline-block";
  else if(p.block) return "block";
  return "default";
}

export function borderRounding(p, defRad, defFactor){
  if(!defFactor) {
    if(p.rounding || p.rounded) defFactor = 1;
  }
  const factor = p.rounding  || defFactor;
  const base = p.funky ? 25 : defRad;
  return `${factor * base}px`;
}
