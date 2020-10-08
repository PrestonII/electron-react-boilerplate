import React from 'react';
import { TextField } from '@material-ui/core';
import styles from './styles.building.constraint.scss';

function BuildingConstraint () {

  const Q1 = (
    <p>
      What's the
      <em> total RSF of the space? </em>
    </p>
  );

  const Q2 = (
    <p>
      What's the
      <em> RSF loss factor? </em>
    </p>
  );

  const Q3 = (
    <p>
      Is your space a
      <em> multi-tenant </em>
      or
      <em> single-tenant? </em>
    </p>
  );

  return (
    <div className={styles.whats}><p> test </p></div>
  )
}

export default BuildingConstraint;
