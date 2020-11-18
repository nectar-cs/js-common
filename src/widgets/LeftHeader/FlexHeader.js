//@flow
import React from 'react'
import S from './LeftHeaderStyles'
import Layout from '../../styles/layout-styles'
import Text from '../../styles/text-styles'

const gTypes = {
  icon: "icon",
  image: "image",
  stub: "stub"
};

function MaterialIcon(props){
  return(
    <S.Icon className='material-icons' {...(props.graphicProps || {})}>
      { props.graphicName }
    </S.Icon>
  )
}

function Image(props){
  const source = props.graphicName;
  return <S.Image src={source} alt={null}/>;
}

function Graphic(props) {
  const { graphicType } = props;
  const { icon, image } = gTypes;
  switch (graphicType) {
    case icon: return <MaterialIcon {...props}/>;
    case image: return <Image {...props}/>;
    default: return <MaterialIcon {...props}/>;
  }
}

export default function FlexHeader(props){

  const Title = () => {
    if(props.title)
      return <Text.H1>{props.title}</Text.H1>;
    else return props.children[0];
  }

  const Subtitle = () => {
    if(props.subtitle)
      return <Text.P>{props.subtitle}</Text.P>;
    else return props.children[1];
  }

  return(
    <S.Container>
      <Graphic {...props}/>
      <S.TextBox>
        <Layout.Div flex>
          <Title/>
        </Layout.Div>
        <Layout.Div mt={.55} flex align='center'>
          <Subtitle/>
        </Layout.Div>
      </S.TextBox>
    </S.Container>
  )
}

