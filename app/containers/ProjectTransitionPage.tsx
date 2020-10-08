import React from 'react';
import { Button } from '@material-ui/core';
import { TransitionPage } from './TransitionPage';
import { DirectionalButton, BackButton } from '../components/NavigationalButtons';

export function ProjectTransitionPage() {
  const desc = `Let's get more information about the project you're creating a program for`;
  const forward = `Start General Information`;
  const nextPage = '/project/general';

  return (
    <TransitionPage>
      <SectionStart
        desc={desc}
        forwardButtonContent={forward}
        nextPage={nextPage}
      />
    </TransitionPage>
  );
}

function SectionStart({ desc, forwardButtonContent, nextPage }: Props) {
  return (
    <div className="startSection">
      <p className="startSection__desc">{desc}</p>
      <div className="startSection__nav">
        <DirectionalButton location={nextPage} content={forwardButtonContent} />
        <BackButton />
      </div>
    </div>
  );
}

type Props = {
  desc: string;
  forwardButtonContent: string;
  nextPage: string;
};
