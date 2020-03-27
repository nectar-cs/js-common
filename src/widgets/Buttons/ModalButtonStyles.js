import styled from 'styled-components'
import Button from "./../../styles/button-styles"

const Main = styled(Button.BigButton)`
  background: ${p => p.theme.colors.primaryColor};
  font-weight: bold;
  position: absolute;
  width: 360px;
  height: 40px;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const S = { Main };

export default S;
