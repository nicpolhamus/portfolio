import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

import { TMenuItem } from '../../../types';

const MenuItemDiv = styled.div`flex: 0 1 auto;`;

const MenuItemButton = styled.button``;

export function MenuItem({ text, action }: TMenuItem): ReactElement {
  const handleClick = (event: any) => action(event);

  return (
    <MenuItemDiv>
      <MenuItemButton
        onClick={handleClick}>
        {text}
      </MenuItemButton>
    </MenuItemDiv>
  );
}
