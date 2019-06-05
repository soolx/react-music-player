import React from 'react';
import PropTypes from 'prop-types';
// import styles from './index.css';

function BasicLayout(props) {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default BasicLayout;

BasicLayout.defaultProps = {
  // dispatch: () => {},
  children: [],
};

BasicLayout.propTypes = {
  // dispatch: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
