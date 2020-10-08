import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

function InternalNavigationalButton({
  content,
  execute,
  to,
  executableData,
}: InternalNavBtnProps) {
  const dispatch = useDispatch();

  return execute ? (
    <Button onClick={() => dispatch(execute(executableData))}>
      <Link to={to}>{content}</Link>
    </Button>
  ) : (
    <DirectionalButton location={to} content={content} />
  );
}

export function DirectionalButton({ location, content }: IDirectionalButton) {
  return (
    <Button variant='outlined'>
      <Link to={location}>{content}</Link>
    </Button>
  );
}

export function BackButton() {
  const history = useHistory();

  return (
    <Button variant="outlined" onClick={() => history.goBack()}>
      Back
    </Button>
  );
}

export type InternalNavBtnProps = {
  content: string;
  execute?: Function;
  executableData?: Record<string, unknown>;
  to: string;
};

export interface IDirectionalButton {
  content: string;
  location: string;
}

export { InternalNavigationalButton };
