import * as React from 'react';
import styles from './panels.scss';

export const Panel = (props: IPanelContent) => {
  const { title } = props;

  return (
    <div className={styles.panel}>
      <div className="content">{title}</div>
    </div>
  );
};

export interface IPanelContent {
  title: string;
  content: Array<any>;
} & typeof defaultPanelPageProps;

const defaultPanelPageProps = {
  title: 'Program Dashboard',
};
