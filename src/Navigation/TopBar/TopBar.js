import React, {Fragment, useEffect, useState, useRef} from 'react';
import { S } from './TopBarStyles';
import Text from './../../styles/text-styles'
import Layout from './../../styles/layout-styles'
import Img from './../../styles/img-styles'
import Button from './../../styles/button-styles'
import {Link} from "react-router-dom";
import ModestLink from "../../widgets/ModestLink/ModestLink";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import LogoBox from "../../widgets/LogoBox";
import useHover from "../../utils/useHover";
import {hover} from "../../styles/constants";

export default function TopBar(props) {
  const { rightSideButtons, loginCallback, bodyRef } = props;
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
            bodyRef={bodyRef}
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

function RightSideButtons({rightSideButtons, bodyRef}) {
  const thingRef = React.createRef(null);
  const [hoverIndex, setHoverIndex] = useState(-1);

  function onHoverChanged(i, isHovered){
    if(isHovered)
      setHoverIndex(i);
  }

  // useOutsideAlerter(bodyRef, _ => setHoverIndex(-1));

  return rightSideButtons.map((descriptor, i) => (
    <RightSideButton
      descriptor={descriptor}
      _ref={i === hoverIndex ? thingRef : null}
      onHoverChanged={state => onHoverChanged(i, state)}
      isDropped={i === hoverIndex}
      key={i}
    />
  ))
}

function RightSideButton({descriptor, onHoverChanged, isDropped}){
  const [hoverRef, isHovered] = useHover();

  useEffect(_ => {
    onHoverChanged(isHovered);
  }, [isHovered]);

  return(
    <Layout.Div
      ref={hoverRef}
      flex
      hoverPoint
      align='center'
      mr={3}>
      { descriptor.href &&
      <a href={descriptor.href}>
        <RightSideButtonTextView descriptor={descriptor}/>
      </a>
      }
      { !descriptor.href &&
      <RightSideButtonTextView descriptor={descriptor}/>
      }
      { (descriptor.actions || descriptor.icon) &&
      <Text.Icon
        mt={-.1}
        ml={.2}
        size={1.0}
        emotion='warning2'
        name={descriptor.icon || 'arrow_drop_down'}
      />
      }
      { descriptor.actions && isDropped &&
      <RightSideButtonMenu
        actions={descriptor.actions}
      />
      }
    </Layout.Div>
  )
}

function RightSideButtonMenu({actions}){
  return(
    <Layout.Div
      sexyShadow
      emotion='primaryBkg'
      top={'43px'}
      minWidth='132px'
      pt={'20px'}
      pb={'20px'}
      pl={'15px'}
      pr={'15px'}
      rounded
      style={{position: 'fixed'}}
      >
      { actions.map((action, i) =>  (
        <Fragment key={i}>
          <MenuItem action={action}/>
          { i !== actions.length - 1 &&
          <Layout.Div
            mt={1}
            mb={1}
            height={'.5px'}
            emotion={'lightestGrey'}
            style={{opacity: '0.3'}}
          />
          }
        </Fragment>
      )) }
    </Layout.Div>

  )
}

function MenuItem({action, _ref}){
  const [hoverRef, isHovered] = useHover();

  const { path, icon, name } = action;
  return(
    <ModestLink to={path}>
      <Layout.Div
        ref={hoverRef}
        flex
        align='center'>
        <Text.Icon
          emotion='warning2'
          name={icon}
          size={.73}
          style={{opacity: isHovered ? '1.0' : '0.7'}}
        />
        <Text.P
          bold={isHovered}
          mt={'1px'}
          emotion='white'
          hoverBold
          ml={.8}>
          {name}
        </Text.P>
      </Layout.Div>
    </ModestLink>
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

function RightSideButtonTextView({descriptor}){
  return(
    <Text.H4
      bold
      hoverPoint
      hoverEmotion='warning2'
      emotion='contrastFont'>
      { descriptor.name }
    </Text.H4>
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

TopBar.defaultProps = {
  profileActions: [],
  rightSideButtons: []
}
