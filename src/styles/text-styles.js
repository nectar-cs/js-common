import styled from "styled-components";
import {colorKeys, commonFontAttrs, commonSizeAttrs, contrastFontForBkg, resolveColor} from "./constants";

const P = styled.p`
  font-size: 13px;
  ${commonSizeAttrs};
  ${commonFontAttrs};
`;

const H1 = styled(P)`
  font-size: 20px;
`;

const H2 = styled(P)`
  font-size: 18px;
`;

const H3 = styled(P)`
  font-size: 16px;
`;

const H4 = styled(P)`
  font-size: 14px;
`;

const StatusTag = styled(P)`
  border-radius: 3px;
  padding: 5px 14px;
  text-align: center;
  display: inline-block;
  background: ${p => resolveColor(p, p.emotion, colorKeys.primaryColor)};
  color: ${p => contrastFontForBkg(p, p.emotion, colorKeys.primaryColor)};
`;

const CleanStatus = styled(P)`
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const BoldStatus = styled(P)`
  letter-spacing: 0.2px;
  font-weight: 800;
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
  H1,
  H2,
  H3,
  H4,
  Code,
  BoldStatus,
  CleanStatus,
  StatusTag,
  BoldRef,
  ContrastCode
};

export default Text;
