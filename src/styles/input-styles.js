import styled from "styled-components";

const InputLine = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  margin-top: 20px;
  justify-content: space-between;
`;

const inputBorderWidth = "1px";


const LineInput = styled.input`
  width: 100%;
  border-color: ${p => p.theme.colors.primaryColor};
  border-width: 0 0 ${inputBorderWidth} 0;
  padding-left: 0;
  border-radius: 0;
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
    border-width: 0 0 calc(${inputBorderWidth} + 1px) 0;  
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

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
