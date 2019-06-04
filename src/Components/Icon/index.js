import React from 'react';
// import styles from './index.less';
// import classnames from 'classnames';

export default function Icon(props) {
  const { type, ...otherProps } = props;
  return (
    <i className={`iconfont ${type}`} {...otherProps}></i>
  );
}
