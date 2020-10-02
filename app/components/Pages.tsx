import React, { ReactNode } from 'react';
import { Panel } from './Panels';
import styles from './pages.scss';

export const Page = (props: PageProps) => {
  const { children } = props;

  return <div className={styles.page}>{children}</div>;
};

export const PageWithPanel = (props: PanelPageProps) => {
  const { title, children } = props;

  return (
    <div className={styles.pagePanel}>
      <Panel title={title} />
      <Page>{children}</Page>
    </div>
  );
};

const defaultPanelPageProps = {
  title: 'Program Dashboard',
};

type PanelPageProps = {
  title: string;
  children: ReactNode;
} & typeof defaultPanelPageProps;

type PageProps = {
  children: ReactNode;
};

PageWithPanel.defaultProps = defaultPanelPageProps;
