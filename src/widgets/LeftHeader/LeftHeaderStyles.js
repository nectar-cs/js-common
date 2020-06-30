import styled from 'styled-components'

const headerHeight = "56px";
const imageShrink = .82;

const OutContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  right: 0;
  width: 100%;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  top: 14px;
  padding: 0;
  display: inline-flex;
  height: ${headerHeight};
`;

const Image = styled.img`
  object-fit: contain;
  margin-top: 4px;
  width: calc(${headerHeight} * ${imageShrink});
  height: calc(${headerHeight} * ${imageShrink});
  background: transparent;
`;

const ImageStub = styled(Image)`
  border: none;
`;

const ImageBox = styled.div`
  height: 100%;
  margin: 2px 0 0 8px;
`;

const TextBox = styled.div`
  height: 100%;
  margin: 5px 0 0 8px;
`;

const Icon = styled.i`
  width: ${headerHeight};
  height: ${headerHeight};
  font-size: ${headerHeight};
  color: ${p => p.theme.colors.primaryColor};
`;

const S = {
  Container,
  Image,
  ImageStub,
  ImageBox,
  TextBox,
  Icon,
  OutContainer
};

export default S;
