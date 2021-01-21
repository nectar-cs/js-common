// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'
import Button from "../styles/button-styles";

export default styled(Button.FloatingPlus)`
  right: 30px;
  font-size: 40px;
  padding-left: 0;
  padding-top: 2px;
  outline: none;
  border: none;
  background: ${p => p.theme.colors.primaryBkg};
  color: ${p => p.theme.colors.contrastFont};
  :hover {
    cursor: pointer;
    color: ${p => p.theme.colors.warning2};
  }
`;
