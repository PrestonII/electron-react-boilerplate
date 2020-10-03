import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cell, Column, Table } from '@blueprintjs/table';
import { PROJECTS_RECENT } from '../../data/data.home.initial';
import styles from './project.scss';

export default function ProjectSelection() {
  // const dispatch = useDispatch();
  // const value = useSelector();

  const projs = PROJECTS_RECENT.list;
  const rendNames = projs.map((i) => <Cell key={`${i.id}`}>{i.name}</Cell>);
  const cellRenderer = (rowIndex: number) => {
    return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>;
  };

  return (
    <div className={styles.project}>
      <div className="project__display">
        <h4>Recent Projects</h4>
        <div className="display__options">
          <Table
            numRows={projs.length}
            // className={styles.project__display__table}
          >
            <Column cellRenderer={cellRenderer} />
          </Table>
        </div>
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

  return <DisplayItem key={name} value={date} />;
}

const DisplayItem = (props: DisplayItemProps) => {
  const { key, value } = props;

  return (
    <div className="displayItem">
      <p className="displayItem__key">{key}</p>
      <p className="displayItem__value">{value}</p>
    </div>
  );
};

type DisplayItemProps = {
  key: string;
  value: string;
}
