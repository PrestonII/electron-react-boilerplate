import React from 'react';
import { PageWithPanel, IPanelPageProps } from '../components/Pages';

export function TransitionPage({ panel, children }: IPanelPageProps) {
  return <PageWithPanel panel={panel}>{children}</PageWithPanel>;
}
