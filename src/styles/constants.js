// noinspection NpmUsedModulesInstalled
import {css} from 'styled-components'
import {lilDim, easyColor, hexToRgb} from "./utils";

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
    panelBlue: "#f1f8ff",
    ruby: "#D81E5B",
    tart: "#F0544F",
    coffee: "#3A3335",
    comfy: "#6153cc",
    formBorderBlue: "#b2d1f3",
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
    inputGrey: "#fafbfc",
    inputBorderGrey: "#f0f1f3",
    cool2: "#038074",
    milGreen: "#698F3F"
  },

  dims: {
    topBarHeight: "55px",
    sideBarWidth: "220px",
    slickBarWidth: '58px',
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

export const slickBarTheme = {
  ...theme,
  dims: {
    topBarHeight: 0,
    sideBarWidth: theme.dims.slickBarWidth
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

export const commonSizeAttrs = css`
  ${p => marginsAndPadding('margin', p)};
  ${p => marginsAndPadding('padding', p)};
  ${p => heightAndWidth(p)};
  ${p => colorStyles(p)};
  ${p => centered(p)};
  ${p => centerLow(p)};
  ${p => absolutePositioning(p)};
  ${p => sexyShadow(p)};  
  ${p => rotating(p)};
  ${p => pulse(p)};
  ${p => floating(p)};    
  ${p => borderStyles(p)};
`;

export const commonFontAttrs = css`
  ${p => noDec(p)};
  ${p => fontStyles(p)};
`;








/*********************WHATEVER************************/
const corners = ['top', 'right', 'bottom', 'left'];

function rotating(p){
  if(p['rotating']){
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









/*--------------------UTILS---------------------*/


const positionalShorthands = {
  trbl: ['top', 'right', 'bottom', 'left'],
  tb: ['top', 'bottom'], lr: ['left', 'right'],
  t: ['top'], r: ['right'], b: ['bottom'], l: ['left']
}

export function marginsAndPadding(base, p, defaults={}){
  const total = [];
  const merged = {...defaults, ...p};

  if(merged['padded']){
    total.push('padding: 9px 14px;');
  }

  for(let shortHand of Object.entries(positionalShorthands)){
    const [propName, cssMappings] = shortHand;
    const propValue = merged[`${base[0]}${propName}`];
    if(propValue){
      for(let cssMapping of cssMappings){
        total.push(`${base}-${cssMapping}: ${lilDim(propValue)};`);
      }
    }
  }

  if(total.length > 0){
    return css`
      ${total.join("\n")}
    `;
  }
}

export function heightAndWidth(p, defaults={}){
  const merged = {...defaults, ...p};
  const total = [];
  if(merged['wh']){
    let width, height;
    if(typeof merged['wh'] === 'string')
      [width, height] = merged['wh'].split(" ");
    else width = merged['wh'];
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
  if(merged['flt']){
    return css`
      float: ${merged['flt']};
    `;
  }
}

export function hover(p, defaults={}){
  let total = [];
  const merged = {...(defaults || {}), ...p};
  if(merged.hov_point){
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

const defRoundingApplier = (x) => x;

const prefixCodes = {
  '': '',
  'hov_': 'hover',
  'foc_': 'focus',
  'dis_': 'disabled'
};

function miniResolve(merged, naivePropName, crtPrefix){
  const fullPropName = `${crtPrefix}${naivePropName}`;
  return merged[fullPropName];
}

export function multiMode(merged, worker){
  let encapsulationBuckets = {};

  function push(propName, intent){
    for(let prefix of Object.keys(prefixCodes)){
      const propValue = merged[`${prefix}${propName}`];
      if(propValue){
        const isGen = typeof intent === 'function';
        const getter = naive => miniResolve(merged, naive, prefix);
        let resolvedCssStmts = isGen ? intent(propValue, getter) : intent;
        if(resolvedCssStmts){
          if(!Array.isArray(resolvedCssStmts))
            resolvedCssStmts = [resolvedCssStmts];

          resolvedCssStmts = resolvedCssStmts.map(stmt => (
            stmt.endsWith(";") ? stmt : `${stmt};`)
          );

          if(encapsulationBuckets[prefix] == null)
            encapsulationBuckets[prefix] = [];
          encapsulationBuckets[prefix].push(...resolvedCssStmts);
        }
      }
    }
  }

  worker(push);

  const pray = [];

  for(let entry of Object.entries(encapsulationBuckets)){
    const [code, cssStatements] = entry;
    const stmts = cssStatements.join("\n");
    let enclosed;
    if(prefixCodes[code]){
      enclosed = `&:${prefixCodes[code]}{
        ${stmts}
      }`;
    } else enclosed = stmts;
    pray.push(enclosed);
  }

  if(pray.length > 0){
    return css`
      ${pray.join("\n")}
    `;
  }
}

export function colorStyles(p, defaults={}){
  return multiMode({...defaults, ...p}, push => {
    push('calm', `color: ${easyColor(p, 'secondaryFont')}`);
    push('emotion', val => `color: ${easyColor(p, val)}`);
    push('bkgEmotion', val => `background: ${easyColor(p, val)}`);
    push('point', 'cursor: pointer');
  });
}

export function fontStyles(p, defaults={}){
  const bkp = { fontSize: p.theme.font.size, fontFam: p.theme.font.family };
  return multiMode({...bkp, ...defaults, ...p}, push => {
    push('bold', 'font-weight: bold');
    push('fontSize', val => `font-size: ${val}`);
    push('promo', `font-size: ${p.theme.font.promoSize}`);
    push('invisible', 'visibility: hidden');
    push('underline', 'text-decoration: underline');
    push('fontFam', val => `font-family: ${val}`);
    push('hacker', "font-family: \"Courier 10 Pitch\", monospace");
    push('humane', "font-size: 13.5px");
    push('textAlign', val => `text-align: ${val}`)
  });
}

export function borderStyles(p, defaults={}){
  const merged = {...defaults, ...p};
  let { halfRounded, roundingApplier} = merged;

  if(halfRounded)
    roundingApplier = x => `0 0 ${x} ${x}`;

  roundingApplier = roundingApplier || defRoundingApplier;

  return multiMode({...defaults, ...p}, push => {
    push('lightBorder', (_, get) => [
      `border-color: ${easyColor(p, null, 'grey3')}`,
      'border-style: solid;',
      `border-width: ${get('borderWidth') || '.5px'}`
    ]);
    push('dented', `border-radius: ${roundingApplier('2.5px')}`);
    push('rounded', `border-radius: ${roundingApplier('4px')}`);
    push('sofa', `border-radius: ${roundingApplier('8px')}`);
    push('funky', `border-radius: ${roundingApplier('25px')}`);
    push('borderEmotion', val => [
      `border-color: ${easyColor(p, val)};`,
      'border-style: solid;'
    ]);
    push('borderWidth', val => [
      `border-width: ${val}`,
      'border-style: solid'
    ]);
    push('borderStyle', val => `border-style: ${lilDim(val)};`);
    push('borderRadius', val => `border-radius: ${roundingApplier(lilDim(val))};`);
  });
}

function pulse(p, defaults={}){
  const merged = {...defaults, ...p};
  return multiMode(merged, push => {
    push('pulse', (_, get) => {
      const baseColor = "#f7f6f6";
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
      `);
    });
  });
}

export function sexyShadow(p, defaults={}){
  return multiMode({...defaults, ...p}, push => {
    push('sexyShadow', (_, get) => {
      const opacity = get('shadowOpacity') || .2;
      return `box-shadow: 0 0 14px 0 rgba(42,43,42, ${opacity});`;
    })
  });
}

export function heavyShadow(p, defaults={}){
  return multiMode({...defaults, ...p}, push => {
    push('heavyShadow', `box-shadow: 0px 0px 14px 0px rgba(42,43,42,0.3)`)
  })
}

function absolutePositioning(p, defaults){
  const props = {...defaults, ...p};
  let total = [];

  if(props.absolute)
    total.push(`position: absolute;`);

  if(props.relative)
    total.push(`position: relative;`);

  if (props.trbl){
    corners.forEach((corner, i) => {
      total.push(`${corner}: ${lilDim(props.trbl[i])};`);
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

export function overflowScroll(p, defaults={}){
  if({...defaults, ...p}.scroll){
    return css`
      overflow: scroll;
    `
  }
}
