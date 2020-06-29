import styled from 'styled-components';
import {resolveColor} from "./../../styles/constants";

const Container = styled.div`
  position: fixed;
  width: ${p => `calc(100% - ${p.theme.dims.sideBarWidth})`};
  height: ${p => p.theme.dims.topBarHeight};
  top: 0;
  left: ${p => p.theme.dims.sideBarWidth};
  z-index: 10;
  box-sizing: border-box;
  background: ${p => resolveColor(p, p.theme.colors.primaryColor, null)};
  border-style: none none solid none;
  border-color: ${p => 'transparent'};
  border-width: 0 0 2px 0;
`;

const Search = styled.input`
  position: absolute;
  width: 400px;
  height: 60%;
  display: ${p => (p.theme.dims.topBarHeight === '0px' ? 'none' : 'default')};
  left: 50%;
  top: 50%;
  background: white;
  margin: 0;
  padding: 0 0 0 12px;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  &::placeholder {
    color: ${p => p.theme.colors.primaryFont};
  }
`;

const CornerBox = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  align-items: center;
`;

const LeftCorner = styled(CornerBox)`
  left: 12px;
`;

const RightCorner = styled(CornerBox)`
  flex-direction: row-reverse;
  right: 24px;
`;

const AvatarCircle = styled.img`
  height: 100%;
  border-radius: 100%;
  margin-left: 18px;
  &:hover{
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.5);
  }
`;



const S = {
  Container,
  Search,
  LeftCorner,
  RightCorner,
  AvatarCircle
};

export { S };
