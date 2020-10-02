import * as React from 'react';

import { Classes, ITreeNode, Tree } from '@blueprintjs/core';

import styles from './panels.scss';

export const Panel = ({ children }: any) => {
  return (
    <div className={styles.panel}>
      <div className="content">Program Dashboard</div>
    </div>
  );
};
