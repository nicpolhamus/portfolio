import React, { ComponentType, MouseEventHandler, ReactElement, useMemo } from 'react';
import { useWindowService } from '../../../../hooks/use.window.service';
import { MinimizedWindow } from './minimizedWindow/component';

export interface ISystemMenuBarProps {
  items: ComponentType[];
}

export function DesktopMenuBar({ items }: ISystemMenuBarProps): ReactElement {
  const { minimizedWindows } = useWindowService();

  const currentMinimzedWindows = useMemo(() => minimizedWindows, [minimizedWindows]);

  // @TODO: need to define how we get the system menu items
  return (
    <div className="menu-bar">
      <>
        {
          items.map(( Item, index ) => (
            <Item key={index} />
          ))
        }
      </>
      <div className="minimized-windows">
        {
          currentMinimzedWindows?.map(({ id, title }) => (
            <MinimizedWindow id={id} title={title} />
          ))
        }
      </div>
    </div>
  );
}
