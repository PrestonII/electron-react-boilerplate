import React from 'react';
import { Button } from '@material-ui/core';
import styles from './project.panel.scss';
import { Panel } from '../../components/Panels';

export const ProjectOpenPanel = () => <Panel content={<OpenOptions />} />;

function OpenOptions() {
  return (
    <div className="open__options">
      <Button
        className={styles.button__project}
        key="new"
        onClick={() => {
          alert('Creating new project');
        }}
      >
        <h1>Create New</h1>
      </Button>
      <Button
        className={styles.button__project}
        key="open"
        onClick={() => {
          alert('Open a project');
        }}
      >
        <h1>Open Project</h1>
      </Button>
    </div>
  );
}
