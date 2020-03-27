import styled from 'styled-components'

const headerHeight = "56px";

const Container = styled.div`
  padding: 0;
  margin: 0 0 8px 0;
  display: inline-flex;
  height: ${headerHeight};
`;

const Image = styled.img`
  object-fit: contain;
  width: calc(${headerHeight} * .84);
  height: calc(${headerHeight} * .84);
  max-height: ${headerHeight};
  max-width: ${headerHeight};
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
  Icon
};

export default S;
