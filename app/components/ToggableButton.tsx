import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function ToggableButton(props: ToggableButtonProps) {
  const [active, setActive] = useState(false);
  const { content } = props;

  return !active ? (
    <Button variant="outlined" onClick={() => setActive(!active)}>
      {content}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setActive(!active)}
    >
      {content}
    </Button>
  );
}

type ToggableButtonProps = {
  content: string;
};

export default ToggableButton;


/*
1. get the index of two buttons [0,1]
2. IF 0's state is CLICKED - OK
*/
