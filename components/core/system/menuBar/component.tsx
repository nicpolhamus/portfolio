import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

import { TMenuItem } from '../types';
import { MenuItemContainer } from './menuItemContainer/component';

export interface ISystemMenuBarProps {
  items?: TMenuItem[];
  onClose: (args: any) => void;
}

interface IMenuBarContentProps {
  float: string;
  children: ReactElement;
}

const SystemMenuBarDiv = styled.div`
  background: rgb(71,79,89);
  background: -moz-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#474f59",endColorstr="#313a40",GradientType=1);
  border: 1px solid #313a40;
  height: 30px;
  width: 100%;
`;

export function SystemMenuBar({ items, onClose }: ISystemMenuBarProps): ReactElement {
  // @TODO: need to define how we get the system menu items
  return (
    <SystemMenuBarDiv>
      <MenuItemContainer items={items}/>
    </SystemMenuBarDiv>
  );
}