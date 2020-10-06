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

    // const { title } = panel;
    // const panelInfo = panel.content.map((c, i) => <p key={i}>{c}</p>);

    return (
      <div className={styles.pagePanel}>
        {/* <Panel title={title} content={panelInfo} /> */}
        { panel }
        <Page>{children}</Page>
      </div>
    )
  }
}

interface IPanelPageProps {
  panel: Panel;
  children: IPageContent;
}
