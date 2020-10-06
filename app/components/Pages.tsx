import React, { ReactNode } from 'react';
import { Panel, IPanelContent } from './Panels';
import styles from './pages.scss';

export const Page = (props: IPageContent) => {
  const { children } = props;

  return <div className={styles.page}>{children}</div>;
};

export const PageWithPanel = (props: PanelPageProps) => {
  const { panelContent, pageContent } = props;

  const { title } = panelContent;
  const panelInfo = panelContent.content.map((i, x) => <p key={x + 1}>{i}</p>);

  return (
    <div className={styles.pagePanel}>
      <Panel title={title} content={panelInfo} />
      <Page>{pageContent}</Page>
    </div>
  );
};

type PanelPageProps = {
  panelContent: IPanelContent;
  pageContent: IPageContent;
};

type IPageContent = {
  children: ReactNode;
};
