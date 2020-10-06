import React from 'react';
import ProjectSelector from '../features/projectSelector/projectSelector';
import ProjectExample from '../features/projectSelector/projectSelector.example';
import { PageWithPanel } from '../components/Pages';

export default function ProjectSelectionPage() {
  const panelData = {
    title: 'TestTile',
    content: ['sfasfsf', 'fsdg'],
  }

  return (
    <PageWithPanel panelContent={panelData}>
      <ProjectSelector />
      {/* <ProjectExample /> */}
    </PageWithPanel>
  );
}
