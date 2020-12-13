import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: ${p => p.theme.dims.topBarHeight};
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  background: ${p => p.theme.colors.primaryBkg};
  border-style: none none solid none;
  border-color: ${p => 'transparent'};
  border-width: 0 0 2px 0;
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
  LeftCorner,
  RightCorner,
  AvatarCircle
};

export { S };
