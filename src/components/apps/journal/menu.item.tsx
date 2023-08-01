import React from 'react';
import { v4 as UUID } from 'uuid';

import { useWindowService } from '@hooks/use.window.service';
import { usePromotableZIndex } from '@hooks/use.promotable.zIndex';

import { IMenuButtonProps } from '@components/core/system/menuBar/types';
import { IWindow } from '../../core';

import { Journal } from './component';

export function JournalMenuButton({ handleVisibility }: IMenuButtonProps): ReactElement {
  const { add } = useWindowService();
  const { addZIndex, promoteZIndex } = usePromotableZIndex();

  const handleClick = (): void => {
    const newJournalWindow: IWindow = {
      id: UUID(),
      content: (<Journal />),
      title: 'Journal',
    };

    add(newJournalWindow);
    handleVisibility();
    addZIndex(newJournalWindow.id);
    promoteZIndex(newJournalWindow.id);
  };

  return (
    <li
      tabIndex={0}
      onClick={handleClick}
    >
      Journal
    </li>
  );
}