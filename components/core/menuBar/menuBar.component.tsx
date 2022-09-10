import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

type TMenuItem = {
  text: string;
  action: (args: any) => void;
};

export interface IMenuBar {
  items?: TMenuItem[];
  help?: string;
  // TODO: add options?
}

const MenuBarDiv = styled.div`
  background: rgb(60,75,89);
  background: -moz-linear-gradient(0deg, rgba(60,75,89,1) 15%, rgba(54,68,81,1) 80%);
  background: -webkit-linear-gradient(0deg, rgba(60,75,89,1) 15%, rgba(54,68,81,1) 80%);
  background: linear-gradient(0deg, rgba(60,75,89,1) 15%, rgba(54,68,81,1) 80%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3c4b59",endColorstr="#364451",GradientType=1);
  border: 2px solid #33404d;
  border-radius: 6px 6px 0 0;
  height: 30px;
  width: 100%;
`;

export function MenuBar({ items, help }: IMenuBar): ReactElement {
  return (
    <>
      <MenuBarDiv>
        test
      </MenuBarDiv>
    </>
  );
}