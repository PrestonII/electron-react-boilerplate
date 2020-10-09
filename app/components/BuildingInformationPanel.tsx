/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NamedValue, INamedValue } from './NamedValue';

import { Panel } from './Panels';

export function BuildingInformationPanel() {
  const title = 'Building Information';

  const [isActive, isActiveStatus] = useState(false);

  const handleGeneral = () => {
    isActiveStatus(!isActive);
  };

  return (
    <Panel title={title}>
      <h2>Data on the way!!</h2>
      {/* <List>

      </List> */}
    </Panel>
  );
}

export function PanelSection({
  handleClick,
  isActive,
  sectionData,
}: IPanelSectionProps) {
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

export function PanelSectionItem({ name, value }: INamedValue) {
  return (
    <ListItem>
      <NamedValue name={name} value={value} />
    </ListItem>
  );
}

interface IPanelSectionProps {
  handleClick: () => void;
  isActive: boolean;
  sectionData: Array<INamedValue>;
}
