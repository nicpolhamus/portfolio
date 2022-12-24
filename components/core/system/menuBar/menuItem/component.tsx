import React, { MouseEventHandler, ReactElement } from 'react';

import { TMenuItem } from '../../../types';

export interface IMenuItem {
  item: TMenuItem;
}

export function MenuItem({ item }: IMenuItem): ReactElement {
  const { action, text } = item;

  const handleClick = (event: any) => action(event);

  return (
    <div 
      className="menu-item"
      onClick={handleClick}>
      {text}
    </div>
  );
}
