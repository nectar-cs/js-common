import React, {Fragment, useState, useRef} from 'react';
import { S } from './TopBarStyles';
import Text from './../../styles/text-styles'
import Layout from './../../styles/layout-styles'
import Img from './../../styles/img-styles'
import Button from './../../styles/button-styles'
import ModestLink from "../../widgets/ModestLink";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
import LogoBox from "../../widgets/LogoBox";
import useHover from "../../utils/useHover";
// noinspection NpmUsedModulesInstalled
import styled from 'styled-components'


export default function TopBar(props) {
  const { rightSideButtons, loginCallback } = props;
  const { user, ProfileSubview, centerPiece } = props;

  return (
    <S.Container>
      <Layout.Div width='100%' height='100%' mt={.2}>
        <LogoBox
          left={2.7}
          top={.85}
          {...props}
        />

        <JumboCrumb {...centerPiece}/>

        <S.RightCorner>
          { user && (
            <ProfileView
              user={user}
              ProfileSubview={ProfileSubview}
            />
          )}
          { !user && (
            <LoginButton
              callback={loginCallback}
            />
          )}
          <RightSideButtons
            rightSideButtons={rightSideButtons}
          />
        </S.RightCorner>
      </Layout.Div>
    </S.Container>
  )
}

function JumboCrumb({name, icon, path}){
  return(
    <ModestLink to={path}>
      <Layout.Div
        absolute
        flex
        left='50%'
        style={{transform: 'translate(-50%, -45%)'}}
        top='50%'
        align='center'
      >
        <Text.Icon
          style={{opacity: '.7'}}
          name={icon}
          emotion='warning2'
          size={1.3}
        />
        <Text.H2
          mt={.1}
          ml={1}
          style={{textTransform: 'uppercase'}}
          emotion='white'>
          { name }
        </Text.H2>
      </Layout.Div>
    </ModestLink>
  )
}

function ProfileView({user, ProfileSubview}){
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, _ => {
    setMenuOpen(false);
  });

  const size = '34px';
  return(
    <Layout.Div
      width={'auto'}
      height={'auto'}
      ref={menuRef}
      mt='2px'>
      <Img.Img
        onClick={_ => setMenuOpen(!isMenuOpen)}
        hov_point
        centerCrop
        width={size}
        height={size}
        src={user['picture']}
      />
      { isMenuOpen && (
        <Layout.Div
          minWidth='242px'
          sexyShadow
          shadowOpacity={.5}
          ptb={1.6}
          bkgEmotion='white'
          rounded
          style={{position: 'fixed'}}
          right={'18px'}
          top='60px'>
          <ProfileSubview/>
        </Layout.Div>
      )}
    </Layout.Div>
  )
}

function RightSideButtons({rightSideButtons}) {
  return rightSideButtons.map((descriptor, i) => (
    <RightSideButton
      descriptor={descriptor}
      key={i}
    />
  ))
}

function RightSideButton({descriptor}){
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, _ => setMenuOpen(false));

  const { href, actions, icon, newTab, layout, cols } = descriptor;

  const MenuView = layout === 'big' ? BigRightSideButtonMenu :
                                    RightSideButtonMenu;

  return(
    <Layout.Div
      ref={menuRef}
      flex
      hov_point
      onClick={_ => setMenuOpen(!isMenuOpen)}
      align='center'
      mr={3}>
      { href && (
        <a href={href} target={newTab ? '_blank' : null}>
          <RightSideButtonTextView descriptor={descriptor}/>
        </a>
      )}
      { !descriptor.href && (
        <RightSideButtonTextView
          descriptor={descriptor}
        />
      )}
      { (actions || icon) && (
        <Text.Icon
          mt={-.1}
          ml={.2}
          size={1.0}
          emotion='warning2'
          name={icon || 'arrow_drop_down'}
        />
      )}
      { descriptor.actions && isMenuOpen && (
        <MenuView
          cols={cols}
          actions={actions}
        />
      )}
    </Layout.Div>
  )
}

const size = '330px';

function BigRightSideButtonMenu({actions, cols}){
  return(
    <Layout.Div
      heavyShadow
      lightBorder
      bkgEmotion='white'
      top='58px'
      right='20px'
      width={`calc(${size} * ${cols || 2} + 50px)`}
      // minHeight='300px'
      pb='30px'
      pl='29px'
      plr='19px'
      dented
      flex
      style={{position: 'fixed', flexWrap: 'wrap', justifyContent: 'space-between'}}
    >
      { actions.map((action, i) =>  (
        <Fragment key={i}>
          <BigMenuItem action={action}/>
        </Fragment>
      )) }
    </Layout.Div>
  )
}

function BigMenuItem({action, _ref}){
  const [hoverRef, isHovered] = useHover();

  const { path, icon, name, subtitle } = action;
  return(
    <ModestLink to={path}>
      <Layout.Div
        mt='36px'
        mb='8px'
        width={size}
        ref={hoverRef}
        flex
        align='center'
      >
        <Text.Icon
          emotion={isHovered ? 'warning2' : 'coffee'}
          name={icon}
          size={1.2}
        />
        <Layout.Div ml='10px' mt='5px'>
          <Text.H3
            bold
            hoverBold
            calm={!isHovered}
            >
            {name}
          </Text.H3>
          <Text.P
            hoverBold
            mt='5px'
            calm
            >
            {subtitle}
          </Text.P>

        </Layout.Div>
      </Layout.Div>
    </ModestLink>
  )
}

// function BigMenuItem({action, _ref}){
//   const [hoverRef, isHovered] = useHover();
//
//   const { path, icon, name, subtitle } = action;
//   return(
//     <ModestLink to={path}>
//       <Layout.Div
//         mt='39px'
//         // mb='15px'
//         width={size}
//         ref={hoverRef}
//         flex
//         align='center'
//       >
//         <Text.Icon
//           emotion={isHovered ? 'warning2' : 'primaryColor'}
//           // emotion='warning2'
//           name={icon}
//           size={0.78}
//           // bold={isHovered}
//         />
//         <Text.H3
//           // bold={isHovered}
//           bold
//           ml='10px'
//           hoverBold
//         >
//           {name}
//         </Text.H3>
//
//       </Layout.Div>
//       <Layout.Div mt='5px'>
//         <Text.P
//           hoverBold
//           mt='5px'
//           calm
//         >
//           {subtitle}
//         </Text.P>
//
//       </Layout.Div>
//     </ModestLink>
//   )
// }

function RightSideButtonMenu({actions}){
  return(
    <Layout.Div
      sexyShadow
      bkgEmotion='white'
      top='58px'
      minWidth='132px'
      ptb='20px'
      plr='15px'
      dented
      style={{position: 'fixed'}}
      >
      { actions.map((action, i) =>  (
        <Fragment key={i}>
          <MenuItem action={action}/>
          { i !== actions.length - 1 && (
            <Layout.Div
              mt={1}
              mb={1}
              height={'1px'}
              bkgEmotion='primaryColor'
              style={{opacity: '0.3'}}
            />
          )}
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
          // emotion='primaryColor'
          emotion='warning2'
          name={icon}
          size={.73}
          bold={isHovered}
          // style={{opacity: isHovered ? '1.0' : '1.0'}}
        />
        <Text.P
          bold={isHovered}
          mt={'1px'}
          // emotion='white'
          hoverBold
          ml={.8}>
          {name}
        </Text.P>
      </Layout.Div>
    </ModestLink>
  )
}

function LoginButton({callback}){
  return(
    <Button.ClearButton
      onClick={callback}
      hov_point
      bkgEmotion='transparent'
      emotion='white'
      hov_emotion='nectar'
      hov_bkgEmotion='transparent'
      borderWidth={'2px'}>
      Login
    </Button.ClearButton>
  )
}

function RightSideButtonTextView({descriptor}){
  return(
    <Text.H4
      bold
      hov_point
      hov_emotion='warning2'
      emotion='contrastFont'>
      { descriptor.name }
    </Text.H4>
  )
}

TopBar.defaultProps = {
  profileActions: [],
  rightSideButtons: []
}
