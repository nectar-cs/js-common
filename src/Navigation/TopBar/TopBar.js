import React, {Fragment, useState, useRef} from 'react';
import { S } from './TopBarStyles';
import Text from './../../styles/text-styles'
import Layout from './../../styles/layout-styles'
import Img from './../../styles/img-styles'
import Button from './../../styles/button-styles'
import {Link} from "react-router-dom";
import ModestLink from "../../widgets/ModestLink/ModestLink";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import LogoBox from "../../widgets/LogoBox";

export default function TopBar(props) {
  const { rightSideButtons, loginCallback } = props;
  const { user, profileActions } = props;

  return (
    <S.Container>
      <Layout.Div width='100%' height='100%' mt={.2}>
        <LogoBox
          left={2.7}
          top={.85}
          {...props}
        />
        <S.RightCorner>
          { user &&
            <ProfileView
              user={user}
              profileActions={profileActions}
            />
          }
          { !user &&
            <LoginButton callback={loginCallback}/>
          }
          <RightSideButtons
            rightSideButtons={rightSideButtons}
          />
        </S.RightCorner>
      </Layout.Div>
    </S.Container>
  )
}

function ProfileView({user, profileActions}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, _ => setIsMenuOpen(false));

  const size = '90%';
  return(
    <Fragment>
      <Img.Img
        onClick={_ => setIsMenuOpen(!isMenuOpen)}
        hoverPoint
        mt={'-2px'}
        centerCrop
        width={'auto'}
        height={size}
        src={user.picture}
      />
      { isMenuOpen &&
        <ProfileMenu
          closeSelf={_ => setIsMenuOpen(false)}
          _ref={menuRef}
          profileActions={profileActions}
        />
      }
    </Fragment>
  )
}

function ProfileMenu({profileActions, _ref, closeSelf}){
  return(
    <Layout.Div
      ref={_ref}
      sexyShadow
      padded
      emotion='soothing'
      minWidth='122px'
      rounded
      style={{position: 'fixed'}}
      top={'60px'}>
      { profileActions.map((action, i) =>  (
        <Fragment key={i}>
          <Layout.Div
            flex
            align='center'
            onClick={_ => { closeSelf(); action.callback()}}>
            <Text.Icon
              // emotion={'white'}
              name={action.icon}
              size={.89}
            />
            <Text.P
              // emotion={'white'}
              hoverPoint
              hoverUnderline
              ml={.8}>
              {action.name}
            </Text.P>
          </Layout.Div>
          { i !== profileActions.length - 1 &&
            <Layout.Div
              mt={.78}
              mb={.75}
              height={'1px'}
              emotion={'lightGrey'}
            />
          }
        </Fragment>
      )) }
    </Layout.Div>
  )
}

function LoginButton({callback}){
  return(
    <Button.ClearButton
      onClick={callback}
      hoverPoint
      bkgEmotion='transparent'
      emotion='white'
      hoverEmotion='nectar'
      hoverBkgEmotion='transparent'
      borderWidth={'2px'}>
      Login
    </Button.ClearButton>
  )
}

function RightSideButtons({rightSideButtons}){
  return rightSideButtons.map((descriptor, i) => (
    <a href={descriptor.href}>
      <Text.H4
        key={i}
        bold
        mr={4}
        hoverPoint
        hoverEmotion='warning2'
        emotion='contrastFont'>
        { descriptor.name }
      </Text.H4>
    </a>
  ))
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

TopBar.defaultProps = {
  profileActions: [],
  rightSideButtons: []
}
