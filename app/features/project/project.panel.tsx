import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import styles from './project.panel.scss';
import { Panel } from '../../components/Panels';
import { createNewProject, openProject } from './project.slice';

export const ProjectOpenPanel = () => <Panel content={<OpenOptions />} />;

function OpenOptions() {
  const dispatch = useDispatch();

  return (
    <div className="open__options">
      <Button
        className={styles.button__project}
        key="new"
        onClick={() => {
          dispatch(createNewProject());
        }}
      >
        <h1>Create New</h1>
      </Button>
      <Button
        className={styles.button__project}
        key="open"
        onClick={() => {
          dispatch(openProject());
        }}
      >
        <h1>Open Project</h1>
      </Button>
    </div>
  );
}
