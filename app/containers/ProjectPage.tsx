import React from 'react';
import Project from '../features/project/project';
import ProjectExample from '../features/project/project.example';
import { PageWithPanel } from '../components/Pages';

export default function ProjectPage() {
  return (
    <PageWithPanel>
      <Project />
      {/* <ProjectExample /> */}
    </PageWithPanel>
  );
}
