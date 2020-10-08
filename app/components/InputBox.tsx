import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

function TextInputBox(props: TextInputBoxProps) {

  const { content } = props;

  return (
    <TextField style={
      {
        width: "39rem",
        backgroundColor: "white",
        float: "right",
        marginRight: "15rem",
      }
    } InputProps={{style: {color:"blue", fontSize: "2.4rem", fontWeight: "400"}}} id="standard-basic" label={content} />
  )
}

export default TextInputBox;
