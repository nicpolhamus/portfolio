import { MouseEventHandler, ReactElement } from 'react';

import { DesktopMenuBar } from '../menuBar/component';
import { Start } from '../menuBar/items';

export function Desktop(): ReactElement {
  const handleClose: MouseEventHandler = () => {
    alert('tried to close');
  };

  // @TODO: need to define how we get the system menu items
  // basically need a file for each menu we want on the menu bar
  // which also means we need to figure out a start menu button, so
  // @TODO: figure out how to include a system button 
  // (maybe have a default that can be overridden)
  return (
    <div className="desktop">
      <DesktopMenuBar items={[Start]}/>
    </div>
  );
}
