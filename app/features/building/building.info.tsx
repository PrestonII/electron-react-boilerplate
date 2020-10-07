import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './styles.building.info.scss';

function BuildingInformation() {
  return (
    <>
      <div className={styles.page}>

        <div className={styles.page__title}>
          <h2>General Space Information</h2>
        </div>

        <div className={styles.page__content__fill}>
          <div className="page__content__question1">
            <p>What's your client's name</p>
            <div className={styles.page__content__question__answers}>
              <TextField className="standardBasic" id="standard-basic" label="Client Name" />
            </div>
          </div>

          <div className={styles.page__content__question}>
            <p>
              Which
              <em> units </em>
              should we use to measure your space?
            </p>
            <div className={styles.page__content__question__answers}>
              <Button variant="outlined">
                Imperial
              </Button>
              <Button variant="outlined">
                Metric
              </Button>
            </div>
          </div>

          <div className="page__content__question">
            <p>
              Is your space a
              <em> multi-tenant </em>
              or
              <em> single-tenant? </em>
            </p>
            <div className={styles.page__content__question__answers}>
              <Button variant="outlined">
                Single
              </Button>
              <Button variant="outlined">
                Multi
              </Button>
            </div>
          </div>

          <div className="page__content__question">
            <p>
              Is this space a
              <em> broadcast </em>
              studio?
            </p>
            <div className={styles.page__content__question__answers}>
              <Button variant="outlined">
                Yes
              </Button>
              <Button variant="outlined">
                No
              </Button>
            </div>
          </div>
        </div>

        <div className="page__navigation">
          <Button variant="outlined">
            Back
          </Button>
          <Button variant="outlined">
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default BuildingInformation;
