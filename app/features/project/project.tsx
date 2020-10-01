import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Column, Table } from '@blueprintjs/table';

export default function ProjectSelection() {
  // const dispatch = useDispatch();
  // const value = useSelector();

  const choicesMain = ['Create New Project', 'Open a Project'];
  const choicesProjects = [
    'Google Headquarters',
    'Urby',
    'Purell Conneticut Office',
  ];

  return (
    <div className="project">
      <div className="project__panel">
        <div className="project__panel__selector">
          <h1>Program Generator</h1>
          <div className="selector__options">
            <p>Create New Project</p>
            <p>Open Project</p>
          </div>
        </div>
        <div className="project__panel__display">
          <h4>Recent Projects</h4>
          <div className="display__options">
            <Table numRows={choicesProjects.length}>
              <Column name="Recent Projects" />
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
