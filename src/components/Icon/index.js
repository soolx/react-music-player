import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import styles from './index.less';

export default function Icon(props) {
  const { type, ...otherProps } = props;
  return (
    <i className={classNames('iconfont', type)} {...otherProps} />
  );
}

Icon.defaultProps = {
  type: '',
};

Icon.propTypes = {
  type: PropTypes.string,
};
