import {css} from 'styled-components'

function resolveColor(props, colorKey, backupColorKey){
  let resolvedColor = props.theme.colors[colorKey];
  return resolvedColor || props.theme.colors[backupColorKey];
}

export function contrastFontForBkg(bkgColorKey){
  switch (bkgColorKey) {
    case colorKeys.primaryColor:
    case colorKeys.primaryFont:
      return colorKeys.contrastFont;
  }
}

export const colorKeys = {
  primaryColor: 'primaryColor',
  primaryFont: 'primaryFont',
  dumbName: 'primaryColor',
  primaryFontMuted: 'primaryFontMuted',
  primaryFontLess: 'primaryFontLess',
  contrastColor: 'contrastColor',
  contrastFont: 'contrastFont',
  secondaryColor: 'secondaryColor',
  excited: 'excited',
};

export const theme = {
  colors: {
    [colorKeys.primaryColor]: "#233142",
    [colorKeys.primaryFont]: "#5c6070",
    [colorKeys.primaryFontMuted]: "#FFFFFF48",
    [colorKeys.primaryFontLess]: "#5c6070",
    [colorKeys.contrastColor]: '#FFFFFF',
    [colorKeys.contrastFont]: "#FFFFFF",
    // [colorKeys.contrastLessFont]: "#acb2c1",
    [colorKeys.secondaryColor]: "#455D7A",
    [colorKeys.excited]: "#fc395b",
    contentBackgroundColor: "#eaecef",
    itemBackgroundColor: "white",
    lineColor: "#455D7A",
    pleasant: "#535b77",
    success: "#326342",
    fail: "darkred",
    warn: "tomato",
    warn2: "orange",
    warnSoft: "#F6AE2D",
    disabled: "#cecece",
  },

  dims: {
    topBarHeight: "0px",
    sideBarWidth: "220px",
    tableBorderWidth: "1.5px",
    borderRadius: "4px",
    borderWidth: "1px"
  },
};

export const inverseTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    [colorKeys.primaryColor]: theme.colors.contrastColor,
    [colorKeys.primaryFont]: theme.colors.contrastFont,
    [colorKeys.contrastColor]: theme.colors.primaryColor,
    [colorKeys.contrastFont]: theme.colors.primaryFont,
  }
};

export const commonSizeAttrs = css`
  margin-top: ${p => `${(p.tm || 0) * 12}px`};
  margin-right: ${p => `${(p.rm || 0) * 12}px`};
  margin-bottom: ${p => `${(p.bm || 0) * 12}px`};
  margin-left: ${p => `${(p.lm || 0) * 12}px`};
`;

export const commonFontAttrs = css`
  color: ${p => resolveColor(p, p.emotion, colorKeys.primaryFont)};
  font-weight: ${p => textWeight(p)};
  text-align: ${p => textAlign(p)};
  font-size: ${p => textSize(p)};
  display: ${p => textDisplay(p)};
  visibility: ${p => textVisibility(p)};
`;

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

export function colored(name, backup){
  if(name){
    if(theme.colors[name]) return theme.colors[name];
    return 'black';
  }
  else if(backup) return backup;
  else return theme.colors.primaryColor;
}
