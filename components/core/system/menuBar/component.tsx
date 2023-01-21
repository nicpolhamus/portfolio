import React, { ComponentType, MouseEventHandler, ReactElement } from 'react';

export interface ISystemMenuBarProps {
  items: ComponentType[];
}

export function DesktopMenuBar({ items }: ISystemMenuBarProps): ReactElement {

  // @TODO: need to define how we get the system menu items
  return (
    <div className="menu-bar">
      <div className="menu">
        {
          items.map(( Item, index ) => (
            <Item key={index} />
          ))
        }
      </div>
    </div>
  );
}
