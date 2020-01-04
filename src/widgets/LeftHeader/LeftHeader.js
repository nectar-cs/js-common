import React from 'react';
import S from './LeftHeaderStyles'

export class LeftHeader extends React.Component<Props> {

  render(){
    const { title, subtitle } = this.props;
    return(
      <S.Container>
        { this.renderGraphic() }
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.TextBox>
      </S.Container>
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
  }

  static defaultProps = {
    graphicType: LeftHeader.gTypes.icon
  };
}

type Props = {
  title: string,
  graphicName: string,
  subtitle: any,
  graphicType: 'icon' | 'image' | 'stub'
};
