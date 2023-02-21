import React from 'react';
import { v4 as UUID } from 'uuid';

import { IOptionProps } from '.';
import { usePromotableZIndex } from '../../../../../../../hooks/use.promotable.zIndex';
import { useWindowService } from '../../../../../../../hooks/use.window.service';
import { IWindow } from '../../../../../types';

export function NewWindowButton({ handleVisibility }: IOptionProps) {
  const { add } = useWindowService();
  const { addZIndex, promoteZIndex } = usePromotableZIndex();

  const handleClick = () => {
    const newWindow: IWindow = {
      id: UUID(),
      content: 'test',
    };

    add(newWindow);
    handleVisibility();
    addZIndex(newWindow.id);
    promoteZIndex(newWindow.id);
  };

  return (
    <li
      tabIndex={0}
      onClick={handleClick}
    >
      Add Window
    </li>
  );
}