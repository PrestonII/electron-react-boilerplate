import React from 'react';
import styles from './panels.scss';

export interface IPanelContent {
  title: string;
  content: Array<JSX.Element>;
}

export class Panel extends React.Component<IPanelContent> {
  static defaultProps = {
    title: 'Program Dashboard',
  };

  render() {
    const { title, content } = this.props;

    const mapped = content.map((x, index) => {
      const key = index;
      const value = `${x} - ${key}`;
      return <span key={key}>{value}</span>;
    });

    return (
      <div className={styles.panel}>
        <div className={`title`}>{title}</div>
        <div className={styles.panel__content}>{content}</div>
      </div>
    );
  }
}
