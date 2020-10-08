import React from 'react';
import { DirectionalButton, BackButton } from './NavigationalButtons';

export function TransitionSection({
  desc,
  forwardButtonContent,
  nextPage,
}: Props) {
  return (
    <div className="section">
      <p className="section__desc">{desc}</p>
      <div className="section__nav">
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
