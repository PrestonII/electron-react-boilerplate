import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

function TextInputBox(props: TextInputBoxProps) {

  const { content } = props;

  return (
    <TextField id="standard-basic" label={content} />
  )
}

export default TextInputBox;
