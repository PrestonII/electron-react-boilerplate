import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';
import Project from '../features/project/project';
import { PageWithPanel } from './Pages';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      {/* <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link> */}
      {/* <Project /> */}
      <PageWithPanel />
    </div>
  );
}
