import React from 'react';
import ProjectSelector from '../features/projectSelector/projectSelector';
import ProjectExample from '../features/projectSelector/projectSelector.example';
import { PageWithPanel } from '../components/Pages';

export default function ProjectSelectionPage() {
  return (
    <PageWithPanel >
      <ProjectSelector />
      {/* <ProjectExample /> */}
    </PageWithPanel>
  );
}
