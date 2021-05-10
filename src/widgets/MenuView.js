import React from "react";
import {useLocation} from "react-router";
import NectarGuiUtils from "../utils/NectarGuiUtils";
import Layout from "../styles/layout-styles";
import ModestLink from "./ModestLink";
import Text from "../styles/text-styles";

export default function MenuView({prefix, routes, width, seekIndex}){
  const location = useLocation();
  let suffix = location.pathname.split('/').reverse()[0];

  const selectedInd = NectarGuiUtils.findCrtIndex(routes, location, seekIndex);

  return(
    <Layout.Div
      absolute
      top={1}
      minHeight='600px'
      width={width}
      borderEmotion='grey3'
      borderWidth='0px'
      borderRadius='5px'
      pt={1}
      pb={1}>
      <Layout.Div>
        { routes.filter(r => !!r.name).map((route, i) => (
          <Layout.Div key={i}>
            <ItemView
              index={i}
              isSelected={selectedInd === i}
              prefix={prefix}
              crtSuffix={suffix}
              {...route}
            />
          </Layout.Div>
        )) }
      </Layout.Div>
    </Layout.Div>
  )
}

function ItemView({prefix, name, path, isSelected}){
  const link = `${prefix}/${path}`.replace("//", "/");

  return(
    <ModestLink to={link}>
      <Layout.Div
        pl={.75}
        pr={.75}
        flex
        align='center'
        hov_point
        pt={1}
        pb={1}>
        <Text.Icon
          size={1}
          emotion={isSelected ? 'warning2' : 'lightGrey' }
          name='keyboard_arrow_right'
          mr={.5}
        />
          <Text.P
            hoverBold
            fontSize={'13.5px'}
            bold={isSelected}>
            {name}
          </Text.P>
      </Layout.Div>
    </ModestLink>
  )
}

MenuView.defaultProps = {
  useId: true
}
