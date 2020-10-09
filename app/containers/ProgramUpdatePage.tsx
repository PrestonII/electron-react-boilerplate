import React from 'react';
import { ProgramHeader } from '../components/ProgramHeader';
import { TransitionPage } from './TransitionPage';
import { TransitionSection } from '../components/TransitionSection';
import { BuildingInformationPanel } from '../components/BuildingInformationPanel';
import { ProgrammedSpaceDisplay } from '../components/SpaceDisplay';

export function ProgramUpdatePage() {
  const desc = `Let's take a look at the open plan workspace requirements`;
  const forward = `Start Open Plan`;
  const nextPage = '/project/workspace';

  return (
    <TransitionPage panel={<BuildingInformationPanel />}>
      <div className="page__header">
        <ProgramHeader />
      </div>
      <div className="page__info">
        <ProgrammedSpaceDisplay />
      </div>
      <div className="page__nav">
        <TransitionSection
          desc={desc}
          forwardButtonContent={forward}
          nextPage={nextPage}
        />
      </div>
    </TransitionPage>
  );
}
