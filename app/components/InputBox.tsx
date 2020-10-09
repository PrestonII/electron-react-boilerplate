import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        // margin: theme.spacing(1),
        width: "39rem",
        fontWeight: 600,
        float: "right",
        borderBottom:"10px #06038D solid",
        marginRight:"15rem",
        lineHeight:"10px",
      },
    },
  }),
);

export default function TextInputBox(props: TextInputBoxProps) {
  const classes = useStyles();
  const { content } = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField InputProps={{style: {color:"#06038D", fontSize: "2.4rem", fontWeight: "400"}}} id="standard-basic" label={content} />
      </div>
    </form>
  )
}
