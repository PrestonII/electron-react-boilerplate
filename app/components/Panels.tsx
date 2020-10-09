/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './panels.scss';

export interface IPanelContent {
  title?: string;
  children: React.ReactNode;
}

export class Panel extends React.Component<IPanelContent> {
  static defaultProps = {
    title: 'Program Dashboard',
    content: null
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.panel}>
        <div>{title}</div>
        <div className={styles.panel__content}>{children}</div>
      </div>
    );
  }
}
