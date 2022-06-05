import React from 'react';
import PagePopovers from './PagePopovers';

export default function NewPages() {
  return (
    <div>
      <h1 style={styles.h1}>Check out the newest pages!</h1>
      <div style={styles.div}>
        <PagePopovers />
      </div>
    </div>
  );
}

const styles = {
  h1: {
    color: 'white',
    fontWeight: 900,
    textAlign: 'center',
    fontSize: '50px',
    marginLeft: '80px',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
