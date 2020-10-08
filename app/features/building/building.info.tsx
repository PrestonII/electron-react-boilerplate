import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './styles.building.info.scss';
import ToggleButton from '../../components/ToggableButton';
import QnA from '../../components/Question';
import TextInputBox from '../../components/InputBox';

function BuildingInformation() {

  const Q1 = (
    <p>
      What is your client's name?
    </p>
  );

  const Q2 = (
    <p>
      Which
      <em> units </em>
      should we use to measure your space?
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

  const Q4 = (
    <p>
      Is this space a
      <em> broadcast </em>
      studio?
    </p>
  );

  return (
    <div className={styles.page}>
      <div className={styles.page__title}>
        <h2>General Space Information</h2>
      </div>

      <QnA
        question={Q1}
        answers={[
          <TextInputBox className={styles.textinputbox} content="Please Tell Us Your Client's Name" />
        ]}
      />

      <QnA
        question={Q2}
        answers={[
          <ToggleButton content="Imperial" />,
          <ToggleButton content="Metric" />,
        ]}
      />

      <QnA
        question={Q3}
        answers={[
          <ToggleButton content="Single" />,
          <ToggleButton content="Multi" />,
        ]}
      />

      <QnA
        question={Q4}
        answers={[
          <ToggleButton content="Yes" />,
          <ToggleButton content="No" />,
        ]}
      />

      <QnA
        answers={[
          <ToggleButton content="Next" />,
          <ToggleButton content="Back" />,
        ]}
      />
    </div>
  );
}

export default BuildingInformation;
