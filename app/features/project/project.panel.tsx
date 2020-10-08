import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './project.panel.scss';
import { Panel } from '../../components/Panels';
import { createNewProject, openProject } from './project.slice';
import routes from '../../constants/routes.json';

export const ProjectOpenPanel = () => <Panel content={<OpenOptions />} />;

function OpenOptions() {
  const dispatch = useDispatch();
  const projectDetails = {
    id: 94615,
    name: 'The Project name',
    dateModified: Date.now(),
  };

  return (
    <div className="open__options">
      <Button
        className={styles.button__project}
        key="new"
        onClick={() => {
          dispatch(createNewProject());
        }}
        // href={routes.PROJECT}
      >
        <Link to={routes.PROJECT}>
          <h1>Create New</h1>
        </Link>
      </Button>
      <Button
        className={styles.button__project}
        key="open"
        onClick={() => {
          dispatch(openProject(projectDetails));
        }}
      >
        <h1>Open Project</h1>
      </Button>
    </div>
  );
}
