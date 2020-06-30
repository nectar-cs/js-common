import React from 'react';
import S from './LeftHeaderStyles'
import Text from "../../styles/text-styles";

export class LeftHeader extends React.Component<Props> {

  render(){
    const { title, subtitle } = this.props;

    return(
      <S.OutContainer>
        <S.Container>
          { this.renderGraphic() }
          <S.TextBox>
            <Text.H1>{title}</Text.H1>
            <Text.P mt={0.55}>{subtitle}</Text.P>
          </S.TextBox>
        </S.Container>
      </S.OutContainer>
    )
  }

  renderGraphic() {
    const { graphicType } = this.props;
    const { icon, image, stub } = LeftHeader.gTypes;
    switch (graphicType) {
      case icon: return this.renderMaterialIcon();
      case image: return this.renderImage();
      case stub: return this.renderStub();
      default: return this.renderStub();
    }
  }

  renderMaterialIcon(){
    return(
      <S.Icon className='material-icons'>
        { this.props.graphicName }
      </S.Icon>
    )
  }

  renderImage(){
    const source = this.props.graphicName;
    return <S.Image src={source} alt={null}/>;
  }

  renderStub(){
    return <S.ImageStub/>;
  }

  static gTypes = {
    icon: "icon",
    image: "image",
    stub: "stub"
  };

  static defaultProps = {
    graphicType: LeftHeader.gTypes.image
  };
}

type Props = {
  title: string,
  graphicName: string,
  subtitle: any,
  graphicType: 'icon' | 'image' | 'stub'
};
