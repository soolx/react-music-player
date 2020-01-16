import React from 'react';
import PropTypes from 'prop-types';
// import styles from './index.css';

export default function BasicLayout(props) {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}

BasicLayout.defaultProps = {
  // dispatch: () => {},
  children: [],
};

BasicLayout.propTypes = {
  // dispatch: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
