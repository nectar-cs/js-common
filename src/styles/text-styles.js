import styled from "styled-components";
import {colored, commonFontAttrs, commonSizeAttrs, contrastFontForBkg} from "./constants";

const P = styled.p`
  font-size: 13px;
  ${commonSizeAttrs};
  ${commonFontAttrs};
`;

const H5 = styled.h5`
  ${commonSizeAttrs};
  font-size: 14px;
`;

const StatusTag = styled(P)`
  border-radius: 3px;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  color: ${p => contrastFontForBkg(p.emotion)};
  background: ${p => colored(p.emotion)};
`;

const AA = styled.p`
  text-decoration: underline;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${p => p.theme.colors.contrastFont};  
  }

  margin-top: ${p => `${(p.top || 0) * 12}px`};
  margin-right: ${p => `${(p.right || 0) * 12}px`};
  margin-bottom: ${p => `${(p.bottom || 0) * 12}px`};
  margin-left: ${p => `${(p.left || 0) * 12}px`};
`;

const A = styled.a`
  text-decoration: none;
  &:hover{
    text-decoration: underline;
    text-decoration-color: ${p => p.theme.colors.contrastFont};  
  }
  margin-top: ${p => p.raw ? 0 : `${(p.low || 1) * 12}px`};
  color: ${p => colored(p.emotion || 'primaryFont')};
`;

const PA = styled.p`
  text-decoration: none;
  text-decoration-color: transparent;
  &:hover{
    text-decoration: underline;
    text-decoration-color: ${p => p.theme.colors.contrastFont};
    cursor: pointer;  
  }
  margin-top: ${p => p.raw ? 0 : `${(p.low || 0) * 12}px`};
  margin-right: ${p => p.push ? "3px" : '0'}
  margin-left: ${p => p.pushed ? "3px" : '0'}
  color: ${p => colored(p.emotion || 'primaryFont')};
`;

const CleanStatus = styled.p`
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${p => p.color || colored(p.emotion, p)}
`;

const BoldStatus = styled(CleanStatus)`
  letter-spacing: 0.2px;
  font-weight: 800;
  color: ${p => colored(p.emotion, p)};
  margin-right: ${p => p.push ? "3px" : '0'}
  margin-left: ${p => p.pushed ? "3px" : '0'}
`;

const Code = styled.code`
  display: block;
  margin-top: ${p => p.chill ? "6px" : "2px"};
  color: ${p => p.theme.colors.contrastFont};
  font-size: 12px;
  &:first-child{
    margin-top: 2px;
  }
`;

const ContrastCode = styled(Code)`
  color: ${p => p.theme.colors.primaryFont};
`;

const BoldRef = styled.p`
  text-decoration: underline;
  font-weight: bold;
  margin-right: ${p => p.push ? "3px" : '0'}
  margin-left: ${p => p.pushed ? "3px" : '0'}
`;

const Text = {
  P,
  A,
  PA,
  H5,
  AA,
  Code,
  BoldStatus,
  CleanStatus,
  StatusTag,
  BoldRef,
  ContrastCode
};

export default Text;
