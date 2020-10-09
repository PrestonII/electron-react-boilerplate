import React, { ReactNode } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NamedValue, INamedValue } from './NamedValue';

export function PanelSectionItem({ name, value }: INamedValue) {
  return (
    <ListItem>
      <NamedValue name={name} value={value} />
    </ListItem>
  );
}
