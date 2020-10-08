import React, { ReactNode } from 'react';
import { Panel, IPanelContent } from './Panels';
import styles from './pages.scss';

export const Page = (props: IPageContent) => {
  const { children } = props;

  return <div className={styles.page}>{children}</div>;
};

type IPageContent = {
  children: ReactNode;
};

export class PageWithPanel extends React.Component<IPanelPageProps> {
  constructor(props: IPanelPageProps) {
    super(props);
    console.log('Creating a page with a panel');
  }

  render() {
    const { panel, children } = this.props;

    return (
      <div className={styles.pagePanel}>
        {panel}
        <Page>{children}</Page>
      </div>
    );
  }
}

export interface IPanelPageProps {
  panel?: Panel;
  children: ReactNode;
}
