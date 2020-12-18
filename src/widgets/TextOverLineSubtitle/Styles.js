import styled from 'styled-components';
import {commonFontAttrs, commonSizeAttrs, fontSize} from "../../styles/constants";

const HorizontalBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const Title = styled.p`
  ${commonSizeAttrs};
  ${commonFontAttrs};
  position: absolute;
  top: 47.5%;
  transform: translateY(-50%);
  display: inline-block;
  padding: 0 15px;
  margin-left: 34px;
  background: ${p => p.theme.colors.itemBackgroundColor};
`;

const S = {
  HorizontalBoxWrapper,
  Title
};

export default S;
