import React from 'react';
// import styles from './index.css';

function BasicLayout(props) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default BasicLayout;
