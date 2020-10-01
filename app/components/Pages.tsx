import React, { ReactNode } from 'react';
import { Panel } from './Panels';

export const Page = (props: PageProps) => {
  const { children } = props;

  return <div className="page">{children}</div>;
};

type PageProps = {
  children: ReactNode;
};

export const PageWithPanel = ({ children }: PageProps) => {
  return (
    <div className="page pagePanel">
      <Panel />
      <Page>HOME PAGE</Page>
    </div>
  );
}
