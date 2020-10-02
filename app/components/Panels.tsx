import * as React from 'react';

import { Classes, ITreeNode, Tree } from '@blueprintjs/core';

import styles from './panels.scss';

export const Panel = (props: PanelProps) => {
  const { title } = props;

  return (
    <div className={styles.panel}>
      <div className="content">{title}</div>
    </div>
  );
};

type PanelProps = {
  title: string;
};
