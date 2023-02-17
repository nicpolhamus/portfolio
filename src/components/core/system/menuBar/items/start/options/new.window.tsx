import React from 'react';

import { useWindowService } from '../../../../../../../hooks/use.window.service';
import { IWindow } from '../../../../../types';

export function NewWindowButton() {
  const { add } = useWindowService();

  const handleClick = () => {
    const newWindow: IWindow = {
      id: 1,
      zIndex: '1',
      content: 'test',
    };

    add(newWindow);
  }

  return (
    <li
      tabIndex={0}
      onClick={handleClick}
    >
      Add Window
    </li>
  );
}