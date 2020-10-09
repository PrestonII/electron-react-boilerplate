import React from 'react';
import styles from './project.panel.scss';
import { Panel } from '../../components/Panels';
import { createNewProject, openProject } from './project.slice';
import { InternalNavigationalButton } from '../../components/NavigationalButtons';
import routes from '../../constants/routes.json';

export const ProjectOpenPanel = () => (
  <Panel>
    <OpenOptions />
  </Panel>
);

function OpenOptions() {
  const projectDetails = {
    id: 94615,
    name: 'The Project name',
    dateModified: Date.now(),
  };

  return (
    <div className="open__options">
      <InternalNavigationalButton
        className={styles.button__project}
        content="Create New"
        to={routes.PROJECT}
        execute={createNewProject}
      />
      {/* <InternalNavigationalButton
        className={styles.button__project}
        content="Open Project"
        to={routes.PROJECT}
        execute={openProject}
        executableData={projectDetails}
      /> */}
    </div>
  );
}
