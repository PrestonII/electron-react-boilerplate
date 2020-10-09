import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Panel } from './Panels';

export function BuildingInformationPanel() {
  const title = 'Building Information';
  const [activatedGeneral, setGeneral] = useState(false);

  const handleGeneral = () => {
    setGeneral(!activatedGeneral);
  };

  return (
    <Panel title={title}>
      <List>
        <ListItem button onClick={handleGeneral}>
          <ListItemText primary="General Information" />
          {activatedGeneral ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={activatedGeneral} timeout="auto" unmountOnExit>
          <List>
            <ListItem>
              <p>Total Number of Offices</p>
              <h1>18</h1>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Panel>
  );
}
