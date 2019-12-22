import React from 'react';
import S from './MiconStyles';
import PropTypes from 'prop-types';

export function Micon(props) {
  return (
    <S.Micon onClick={props.callback} className="material-icons" hack={props.hack} {...props}>
      {props.n}
    </S.Micon>
  );
}

Micon.propTypes = {
  n: PropTypes.string.isRequired,
  emotion: PropTypes.string,
  e: PropTypes.any,
  size: PropTypes.string,
  rotate: PropTypes.number,
  callback: PropTypes.func,
};

Micon.defaultProps = {
  e: {},
};
