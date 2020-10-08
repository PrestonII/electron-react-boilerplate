import React from 'react';
import { TransitionPage } from './TransitionPage';
import { TransitionSection } from '../components/TransitionSection';

export function ProjectTransitionPage() {
  const desc = `Let's get more information about the project you're creating a program for`;
  const forward = `Start General Information`;
  const nextPage = '/project/general';

  return (
    <TransitionPage>
      <TransitionSection
        desc={desc}
        forwardButtonContent={forward}
        nextPage={nextPage}
      />
    </TransitionPage>
  );
}
