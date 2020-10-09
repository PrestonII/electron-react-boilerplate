import React from 'react';
import { TransitionPage } from './TransitionPage';
import { TransitionSection } from '../components/TransitionSection';
import routes from '../constants/routes.json';

export function ProjectTransitionPage() {
  const desc = `Let's get more information about the project you're creating a program for`;
  const forward = `Start General Information`;

  return (
    <TransitionPage>
      <TransitionSection
        desc={desc}
        forwardButtonContent={forward}
        nextPage={routes.INFO.START}
      />
    </TransitionPage>
  );
}

export function GeneralInfoStartPage() {
  const desc = `Let's get more information about the space you want to program`;
  const forward = `Start General Information`;

  return (
    <TransitionPage>
      <TransitionSection
        desc={desc}
        forwardButtonContent={forward}
        nextPage={routes.INFO.GENERAL}
      />
    </TransitionPage>
  );
}

