import React from 'react';
import { useSelector } from 'react-redux';
import { selectProject } from '../features/project/project.slice';
import { TransitionPage } from './TransitionPage';
import { TransitionSection } from '../components/TransitionSection';


export function ProgramUpdatePage() {
  const desc = `Let's take a look at the open plan workspace requirements`;
  const forward = `Start Open Plan`;
  const nextPage = '/project/workspace';

  return (
    <TransitionPage>
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

export function ProgramHeader() {
  const { application, client, company } = useSelector(selectProject);

  return (
    <div className="header">
      <div className="header__company">
        <h1>{company}</h1>
      </div>
      <div className="header__program">
        <h2>{application}</h2>
      </div>
      <div className="header__client">
        <p className="header__client__name">{client}</p>
      </div>
    </div>
  );
}

export function ProgrammedSpaceDisplay() {
  return (
    <h1>Programmed Space</h1>
  )
}

// interface HeaderInformation {
//   companyName: string;
//   program: string;
//   clientName: string;
// };
