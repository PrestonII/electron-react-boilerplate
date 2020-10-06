/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './panels.scss';

export interface IPanelContent {
  title?: string;
  content: JSX.Element;
}

export class Panel extends React.Component<IPanelContent> {
  static defaultProps = {
    title: 'Program Dashboard',
    content: null
  };

  render() {
    const { title, content } = this.props;

    return (
      <div className={styles.panel}>
        <div>{title}</div>
        <div className={styles.panel__content}>{content}</div>
      </div>
    );
  }
}
