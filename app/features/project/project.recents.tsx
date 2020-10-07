import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import APPDATA from '../../data/data.app.initial';
import styles from './project.scss';
import { openProject } from './project.slice';
import { NamedValue } from '../../components/NamedValue';

export default function ProjectSelection() {
  const dispatch = useDispatch();
  // const value = useSelector();

  const recentProjects = APPDATA.projects.recent;
  const recent = recentProjects.map((p) => {
    return <RecentProjectItem key={p.id} date={p.dateModified} {...p} />;
  });

  return (
    <div className="project">
      <div className="project__display">
        <h4>Recent Projects</h4>
        <div className="display__options">{recent}</div>
      </div>
    </div>
  );
}

type ProjectItemProps = {
  name: string;
  date: string;
};

const RecentProjectItem = (props: ProjectItemProps) => {
  const { name, date } = props;

  return <NamedValue name={name} value={date} />;
};
