import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { TAction, TMenuItem } from './types';

export interface IMenuBar {
  onClose?: TAction;
  items?: TMenuItem[];
  help?: string;
  // TODO: add options?
}

const MenuBarDiv = styled.div`
  background: rgb(71,79,89);
  background: -moz-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#474f59",endColorstr="#313a40",GradientType=1);
  border: 1px solid #313a40;
  border-radius: 6px 6px 0 0;
  height: 30px;
  width: 100%;
`;

const MenuBarContent = styled.div`
  background: inherit;
  margin: 1% 0 0 2%;
  float: left;
`;

const CloseButton = styled.button`
  float: right;
  margin: 1% 2% 0 0;
  width: 5%;
  border-radius: 100%;
`;

export function MenuBar({ onClose, items, help }: IMenuBar): ReactElement {
  const handleClose = (event: any) => {
    event.preventDefault();

    onClose && onClose(event);
  };

  return (
    <>
      <MenuBarDiv>
        <MenuBarContent>
          test
        </MenuBarContent>
        {onClose && <CloseButton onClick={handleClose}>X</CloseButton>}
      </MenuBarDiv>
    </>
  );
}