import styled from "styled-components";

const borderWidth = p => p.theme.dims.borderWidth;

const InputLine = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  margin-top: 20px;
  justify-content: space-between;
`;

const LineInput = styled.input`
  width: 100%;
  border-color: ${p => p.theme.colors.primaryFont};
  border-width: ${p => inputBorderWidth(p)};
  padding-left: ${p => inputPadding(p)};
  border-radius: ${p => inputBorderRadius(p)};
  box-sizing: content-box;
  margin: 0;
  color: ${p => p.theme.colors.primaryFont};
  &:not(:nth-child(1)) {
   margin-left: 18px;
  }
  &::placeholder{
   color: ${p => p.theme.colors.primaryFontLess}
  }
  &:focus{
    padding-bottom: 6px;
    border-width: ${p => `0 0 calc(${borderWidth(p)} + 1px) 0`};  
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

function inputBorderRadius(p){
  if(p.flat) return "0px";
  else return p.theme.dims.borderRadius;
}

function inputBorderWidth(p){
  const width = p.theme.dims.borderWidth;
  if(p.flat) return `0 0 ${width} 0`;
  else return width;
}

function inputPadding(p){
  if(p.flat) return "0";
  else return "8px";
}

const ContrastInput = styled(LineInput)` 
  border-color: ${p => p.theme.colors.contrastColor};
  color: ${p => p.theme.colors.contrastFont};
  &::placeholder{
    opacity: 1.0;
    color: ${p => p.theme.colors.contrastLessFont}
  }
`;

function labelSize(p){
  if(!p || p.size === 'medium') return '120px';
  if(p.size === 'large') return '240px';
  return '100px';
}

const LineLabel = styled.p`
  width: ${p => labelSize(p)};
  min-width: 120px;
`;

const In = {InputLine, LineInput, LineLabel, ContrastInput };
export default In;
