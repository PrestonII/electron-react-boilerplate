import React, { ReactNode } from 'react';
import List from '@material-ui/core/List';

export function PanelSectionList(children: ReactNode) {
  return <List>{children}</List>;
}
