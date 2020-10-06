import React from 'react';
import { Button } from '@material-ui/core';
import ProjectSelector from '../features/projectSelector/projectSelector';
import ProjectExample from '../features/projectSelector/projectSelector.example';
import { PageWithPanel } from '../components/Pages';
import styles from './style.selection.scss';


export default function ProjectSelectionPage() {
  const panelData = {
    // title: 'TestTile',
    content: [
      <Button
        className={styles.button__project}
        key="new"
        onClick={() => {
          alert('Creating new project');
        }}
      >
        <h1>Create New</h1>
      </Button>,
      <Button
        className={styles.button__project}
        key="open"
        onClick={() => {
          alert('Open a project');
        }}
      >
        <h1>Open Project</h1>
      </Button>,
    ],
  };

  return (
    <PageWithPanel panelContent={panelData}>
      <ProjectSelector />
      {/* <ProjectExample /> */}
    </PageWithPanel>
  );
}
