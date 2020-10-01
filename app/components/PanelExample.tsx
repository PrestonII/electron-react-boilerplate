/* eslint-disable react/sort-comp */
import * as React from 'react';

import { Classes, ITreeNode, Tree } from '@blueprintjs/core';
import { Example, IExampleProps } from '@blueprintjs/docs-theme';
import INITIAL_STATE from '../data/data.panel.initial';

export interface ITreeExampleState {
  nodes: ITreeNode[];
}

// use Component so it re-renders everytime: `nodes` are not a primitive type
// and therefore aren't included in shallow prop comparison
export class Panel extends React.Component<IExampleProps, ITreeExampleState> {
  // public state: ITreeExampleState = { nodes: INITIAL_STATE };

  public render() {
    return (
      <Example options={false} {...this.props}>
        <Tree
          contents={this.state.nodes}
          onNodeClick={this.handleNodeClick}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
          className={Classes.ELEVATION_0}
        />
      </Example>
    );
  }

  private handleNodeClick = (
    nodeData: ITreeNode,
    _nodePath: number[],
    e: React.MouseEvent<HTMLElement>
  ) => {
    const originallySelected = nodeData.isSelected;
    if (!e.shiftKey) {
      // this.forEachNode(this.state.nodes, (n) => (n.isSelected = false));
    }
    nodeData.isSelected =
      originallySelected == null ? true : !originallySelected;
    this.setState(this.state);
  };

  private handleNodeCollapse = (nodeData: ITreeNode) => {
    nodeData.isExpanded = false;
    this.setState(this.state);
  };

  private handleNodeExpand = (nodeData: ITreeNode) => {
    nodeData.isExpanded = true;
    this.setState(this.state);
  };

  // private forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
  //   if (nodes == null) {
  //     return;
  //   }

  //   for (const node of nodes) {
  //     callback(node);
  //     this.forEachNode(node.childNodes, callback);
  //   }
  // }
}
