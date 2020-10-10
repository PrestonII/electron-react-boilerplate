import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NamedValue, INamedValue } from './NamedValue';

export function PanelSectionItem({ name, value }: INamedValue) {
  return (
    <ListItem>
      <NamedValue name={name} value={value} />
    </ListItem>
  );
}

export function buildPanelSectionItem(data: Array<INamedValue>) {
  const mapped = data.map((d: INamedValue, i: number) => {
    return <PanelSectionItem key={i} name={d.name} value={d.value} />;
  });
  return mapped;
}
