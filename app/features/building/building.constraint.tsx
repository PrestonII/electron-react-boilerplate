import React from 'react';
import { TextField } from '@material-ui/core';
import QnA from '../../components/Question';
import styles from './styles.building.constraint.scss';
import TextInputBox from '../../components/InputBox';

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

    <div className={styles.page}>

      <div className={styles.page__logo}>
        <p>hlw</p>
        <p>Program Dashboard</p>
      </div>

      <div className={styles.page__title}>
        <h2> General Building Constraint</h2>
      </div>

      <div className={styles.page__content}>
        <QnA
          question={Q1}
          answers={[
            <TextInputBox content="Enter the total area of the space"/>
          ]}
        />

        <QnA
          question={Q2}
          answers={[
            <TextInputBox content="Enter the total area of the space"/>
          ]}
        />

        <QnA
          question={Q3}
          answers={[
            <TextInputBox content="Enter the total area of the space"/>
          ]}
        />
      </div>

      <div className={styles.page__navigation}>
        <button className={styles.Back}> BACK </button>
        <button className={styles.Next}> NEXT </button>
      </div>
    </div>
  );
};

export default BuildingConstraint;
