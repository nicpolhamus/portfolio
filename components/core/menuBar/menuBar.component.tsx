import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

type TMenuItem = {
  text: string;
  action: (args: any) => void;
};

export interface IMenuBar {
  onClose: (args: any) => void;
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

const CloseButton = styled.button`
  float: right;
  margin: 5px 5px 0 0;
  width: 5%;
  border-radius: 100%;
`;

export function MenuBar({ items, help, onClose }: IMenuBar): ReactElement {
  const handleClose = (event: any) => {
    event.preventDefault();

    onClose(event);
  };

  return (
    <>
      <MenuBarDiv>
        test
        <CloseButton onClick={handleClose}>X</CloseButton>
      </MenuBarDiv>
    </>
  );
}