import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Column, Table } from '@blueprintjs/table';
import { PROJECTS_RECENT } from '../../data/data.home.initial';

export default function ProjectSelection() {
  // const dispatch = useDispatch();
  // const value = useSelector();

  const recentProjects = PROJECTS_RECENT.list;

  return (
    <div className="project">
      <div className="project__display">
        <h4>Recent Projects</h4>
        <div className="display__options">
          <Table numRows={recentProjects.length}>
            <Column name="Recent Projects" />
          </Table>
        </div>
      </div>
    </div>
  );
}
