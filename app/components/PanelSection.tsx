import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  NamedValue,
  INamedValue,
  convertDataToINamedValues,
} from './NamedValue';

export interface IPanelSection {
  handleClick: () => void;
  isActive: boolean;
  sectionData: Array<INamedValue>;
}

export function PanelSection({
  handleClick,
  isActive,
  sectionData,
}: IPanelSection) {

  const getPanelData = (data: Array<INamedValue>) => {
    const mapped = data.map((d: INamedValue, i: number) => {
      return <PanelSectionItem key={i} name={d.name} value={d.value} />;
    });
    return mapped;
  };

  const data = getPanelData(sectionData);

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="General Information" />
        {isActive ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isActive} timeout="auto" unmountOnExit>
        <List>{data}</List>
      </Collapse>
    </>
  );
}
