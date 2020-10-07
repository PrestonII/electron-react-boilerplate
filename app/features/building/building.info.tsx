import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './styles.building.info.scss';

function BuildingInformation() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.page__title}>
          <h2>General Building Information</h2>
        </div>
        <div className="page__content">
          <div className="page__content__question1">
            <p>What's your client's name</p>
            <TextField id="standard-basic" label="Client Name" />
          </div>
          <div className="page__content__question">
            <p>
              Which
              <em> units </em>
              should we use to measure your space?
            </p>
            <div className="page__content__question__answers">
              <Button variant="outlined" color="secondary">
                Imperial
              </Button>
              <Button variant="outlined" color="secondary">
                Metric
              </Button>
            </div>
          </div>
          <div className="page__content__question">
            <p>
              Which
              <em> units </em>
              should we use to measure your space?
            </p>
            <div className="page__content__question__answers">
              <Button variant="outlined" color="secondary">
                Imperial
              </Button>
              <Button variant="outlined" color="secondary">
                Metric
              </Button>
            </div>
          </div>
          <div className="page__content__question">
            <p>
              Which
              <em> units </em>
              should we use to measure your space?
            </p>
            <div className="page__content__question__answers">
              <Button variant="outlined" color="secondary">
                Imperial
              </Button>
              <Button variant="outlined" color="secondary">
                Metric
              </Button>
            </div>
          </div>
          <div className="page__content__question">
            <p>
              Which
              <em> units </em>
              should we use to measure your space?
            </p>
            <div className="page__content__question__answers">
              <Button variant="outlined" color="secondary">
                Imperial
              </Button>
              <Button variant="outlined" color="secondary">
                Metric
              </Button>
            </div>
          </div>
        </div>
        <div className="page__navigation">
          <Button variant="outlined" color="secondary">
            Back
          </Button>
          <Button variant="outlined" color="secondary">
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default BuildingInformation;
