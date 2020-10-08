import React from 'react';
import { Button } from '@material-ui/core';
import { TransitionPage } from './TransitionPage';
import { BackButton } from '../components/NavigationalButtons';

export function ProjectTransitionPage() {
  const desc = `Let's get more information about the project you're creating a program for`;
  const forward = `Start General Information`;

  return (
    <TransitionPage>
      <SectionStart desc={desc} forwardButtonContent={forward} />
    </TransitionPage>
  );
}

function SectionStart({ desc, forwardButtonContent }: Props) {

  return (
    <div className="startSection">
      <p className="startSection__desc">{desc}</p>
      <div className="startSection__nav">
        <Button variant="outlined" color="primary">
          {forwardButtonContent}
        </Button>
        <BackButton />
      </div>
    </div>
  );
}

type Props = {
  desc: string;
  forwardButtonContent: string;
};
