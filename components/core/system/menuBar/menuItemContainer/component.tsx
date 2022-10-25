import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

import { TMenuItem } from '../../../types';

const ItemContainerDiv = (
    { columnGap, children } : { columnGap: string, children: ReactElement }
): ReactElement => { 
  const container = styled.div`
    display: flex;
    column-gap: ${columnGap};
  `;

  return (
    <container>
      {children}
    </container>
  );
};

export interface IMenuItemContainer {
  items: TMenuItem[];
}

export function MenuItemContainer({ items }: IMenuItemContainer): ReactElement {
  return (
    <ItemContainerDiv columnGap="0.1em">
      {items.map(({ text, action }) => (
        <MenuItem text={text} action={action} />
      ))}
    </ItemContainerDiv>
  );
}
