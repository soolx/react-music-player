import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Icon(props) {
  const { type, ...otherProps } = props;
  return <i className={classNames('iconfont', type)} {...otherProps} />;
}

Icon.defaultProps = {
  type: '',
};

Icon.propTypes = {
  type: PropTypes.string,
};
