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

const Title = styled.p`
  font-size: 19px;
  margin: 0;
  text-wrap: none;
`;

const SubTitle = styled.p`
  margin: 7px 0 0 0;
  display: inline-block;
  width: auto;
  color: ${p => p.theme.colors.primaryFontLess};
`;

const Icon = styled.i`
  width: ${headerHeight};
  height: ${headerHeight};
  font-size: ${headerHeight};
  color: ${p => p.theme.colors.primaryColor};
  background: red;
`;

const S = {
  Container,
  Image,
  ImageStub,
  ImageBox,
  Title,
  TextBox,
  SubTitle,
  Icon
};

export default S;
