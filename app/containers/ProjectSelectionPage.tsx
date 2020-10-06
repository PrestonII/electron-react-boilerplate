import React from 'react';
import { Button } from '@material-ui/core';
import ProjectSelector from '../features/projectSelector/projectSelector';
import ProjectExample from '../features/projectSelector/projectSelector.example';
import { PageWithPanel } from '../components/Pages';

export default function ProjectSelectionPage() {
  const panelData = {
    // title: 'TestTile',
    content: [
      <Button
        key="new"
        onClick={() => {
          alert('clicked');
        }}
      >
        <h1>Create New</h1>
      </Button>,
      <Button
        key="open"
        onClick={() => {
        alert('clicked');
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
