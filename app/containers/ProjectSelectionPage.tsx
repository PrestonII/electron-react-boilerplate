/* disable eslint */
import React from 'react';
import { ProjectOpenPanel } from '../features/project/project.panel';
import RecentProjects from '../features/project/project.recents';
import { PageWithPanel } from '../components/Pages';

export default function ProjectSelectionPage() {
  return (
    <PageWithPanel panel={<ProjectOpenPanel />}>
      <RecentProjects />
      {/* <ProjectExample /> */}
    </PageWithPanel>
  );
}
