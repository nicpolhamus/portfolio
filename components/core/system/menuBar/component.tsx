import React, { MouseEventHandler, ReactElement } from 'react';

import { TMenuItem } from '../types';
import { MenuItem } from './menuItem/component';

export interface ISystemMenuBarProps {
  items: TMenuItem[];
}

export function DesktopMenuBar({ items }: ISystemMenuBarProps): ReactElement {

  // @TODO: need to define how we get the system menu items
  return (
    <div className="menu-bar">
      <div className="menu">
        {items.map(item => (<MenuItem item={item} />))}
      </div>
    </div>
  );
}
