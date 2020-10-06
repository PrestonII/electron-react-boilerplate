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
    const { panelContent, children } = this.props;

    const { title } = panelContent;
    const panelInfo = panelContent.content.map((i) => <p>{i}</p>);

    return (
      <div className={styles.pagePanel}>
        <Panel title={title} content={panelInfo} />
        <Page>{children}</Page>
      </div>
    )
  }
}

interface IPanelPageProps {
  panelContent: IPanelContent;
  children: IPageContent;
};
