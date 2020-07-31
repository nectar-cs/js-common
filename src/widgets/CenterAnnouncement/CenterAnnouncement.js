//@flow
import React from 'react';
import S from './CenterAnnouncementStyles'
import { NavLink } from 'react-router-dom';

function MainContent(props) {
  const icon = (
    <S.ContainerIcon
      light={props.light}
      className='material-icons'>
      {props.iconName}
    </S.ContainerIcon>
  );

  const text = <S.ContainerText>{props.text}</S.ContainerText>;

  if (props.contentType === 'action') {
    return (
      <S.ClickableContainer onClick={props.action}>
        {icon}
        <S.ContainerText>
          {props.text}
        </S.ContainerText>
      </S.ClickableContainer>
    );
  } else if (props.contentType === 'children') {
    return (
      <S.ClickableContainer>
        {icon}
        {props.children}
      </S.ClickableContainer>
    );
  } else {
    return (
      <S.ClickableContainer>
        {icon}
        {text}
      </S.ClickableContainer>
    );
  }
}

export default class CenterAnnouncement extends React.Component<Props> {
  render(){
    const props = this.props;
    if (props.contentType === 'nav-link') {
      return (
        <NavLink to={props.action}>
          <MainContent {...props} />
        </NavLink>
      );
    } else return <MainContent {...props} />;
  }

  static defaultProps = { contentType: 'action' };
}

type Props = {
  iconName: string,
  text?: string,
  action?: any,
  light?: boolean,
  contentType: 'action' | 'nav-link' | 'children'
};
