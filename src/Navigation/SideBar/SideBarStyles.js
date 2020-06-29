import styled from 'styled-components'
import {colorKeys, resolveColor} from './../../styles/constants'
import Text from './../../styles/text-styles'

const contentMargin = "12px";
const logoSide = "30px";

const Sidebar = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${p => p.theme.colors.primaryColor};
  width: ${p => p.theme.dims.sideBarWidth};
  height: 100%;
`;

const LogoBox = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-left: ${contentMargin};
  position: relative;
`;

const TitleLogo = styled.img`
  width: ${logoSide};
  height: ${logoSide}
`;

const TitleText = styled(Text.H3)`
  position: absolute;
  top: -3px;
  left: calc(${logoSide} + 7px);
`;

const TitleSub = styled(Text.H3)`
  position: absolute;
  left: calc(${logoSide} + 7px);
  bottom: 1px;
  font-size: 15px;
  color: ${p => resolveColor(p, null, colorKeys.nectar)}
`;

const Content = styled.div`
  margin: 38px 0 0 ${contentMargin};
`;

const SectionRow = styled.div`
  margin-top: 44px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  &:nth-child(1){
    margin-top: 10px;
  }
`;

const SubSection = styled.div`
  margin-left: 14px;
  margin-top: 4px;
  display: inline-flex;
  flex-direction: column;
`;

const ItemRow = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const ItemText = styled(Text.P)`
  font-weight: ${p => p.here ? 'bold' : 'normal'};
  &:hover{
    cursor: pointer
  }
`;

const SubItemsContainer = styled.ul`
  margin-top: -2px;
  margin-bottom: 6px;
`;

const SubItem = styled.li`
  color: ${p => p.theme.colors.contrastFont};
  margin-left: 2px;
`;

const SubItemText = styled(Text.P)`
  color: ${p => p.theme.colors.contrastFont};
  font-weight: ${p => p.here ? 'bold' : 'normal'};
`;

const S = {
  Sidebar,
  LogoBox,
  TitleLogo,
  TitleText,
  Content,
  SectionRow,
  SubSection,
  ItemRow,
  ItemText,
  SubItemsContainer,
  SubItem,
  SubItemText,
  TitleSub
};

export default S;
