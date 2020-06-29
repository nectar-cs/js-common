import React, {Fragment} from 'react';
import { S } from './TopBarStyles';
import Text from './../../styles/text-styles'
import {Link} from "react-router-dom";

function SearchInput() {
  return <S.Search placeholder='Search...'  />;
}

export default function TopBar(props) {
  return (
    <Fragment>
      { props.show && <S.Container>
        <SearchInput/>
        <S.LeftCorner>
          <BreadcrumbsView/>
        </S.LeftCorner>
        <S.RightCorner>
        </S.RightCorner>
      </S.Container>
      }
    </Fragment>
  )
}

function BreadcrumbsView({crumbs}){
  return (crumbs || []).map((crumb, index) => {
    let separator = null;
    const text = (
      <Link to={crumb.path}>
        <Text.P emotion='contrastFont'>
          { crumb.display }
        </Text.P>
      </Link>
    );

    if(index < (crumbs || []).length - 1){
      separator = <Text.P lt={0.3} right={0.3} emotion='contrastFont'> / </Text.P>
    }

    return(
      <Fragment key={`${crumb.path}${index}`}>
        { text }
        { separator }
      </Fragment>
    )
  });
}
