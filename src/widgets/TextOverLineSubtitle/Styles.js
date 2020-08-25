import styled from 'styled-components';
import {commonFontAttrs, commonSizeAttrs, fontSize} from "../../styles/constants";

const HorizontalBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1.0px;
  background: ${p => p.theme.colors.cool};
`;

const Title = styled.p`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  position: absolute;
  top: 47.5%;
  transform: translateY(-50%);
  display: inline-block;
  padding: 0 13px;
  margin-left: 34px;
  background: ${p => p.theme.colors.itemBackgroundColor};
`;

const Toggle = styled.i`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  font-size: 30px;
  color: ${p => p.theme.colors.primaryColor};
  background: ${p => p.theme.colors.itemBackgroundColor};
  display: ${p => (p.there ? 'inline-block' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;

const S = {
  HorizontalBoxWrapper,
  HorizontalLine,
  Title,
  Toggle,
};

export default S;
