import React, { ReactNode } from 'react';
import { Panel } from './Panels';
import styles from './pages.scss';

export const Page = (props: PageProps) => {
  const { children } = props;

  return <div className="page">{children}</div>;
};

type PageProps = {
  children: ReactNode;
};

export const PageWithPanel = ({ children }: PageProps) => {
  return (
    <div className={styles.pagePanel}>
      <Panel />
      <Page>HOME PAGE</Page>
    </div>
  );
}
