import React from 'react';
import styles from './panels.scss';

export interface IPanelContent {
  title: string;
  content: Array<any>;
}

export class Panel extends React.Component<IPanelContent> {
  static defaultProps = {
    title: 'Program Dashboard',
  }

  render() {
    const { title, content } = this.props;

    return (
      <div className={styles.panel}>
        <div className="content">{title}</div>
        { content }
      </div>
    )
  }
}
