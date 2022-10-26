import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { TMenuItem } from "../types";
import { StartButton } from './menuBar/items';

export interface ISystemMenuBarProps {
  onClose: (args: any) => void;
}

const SystemMenuBarDiv = styled.div`
  background: rgb(71,79,89);
  background: -moz-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: -webkit-linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  background: linear-gradient(0deg, rgba(71,79,89,1) 0%, rgba(49,58,64,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#474f59",endColorstr="#313a40",GradientType=1);
  border: 1px solid #313a40;
  height: 30px;
  width: 100%;
`;

export function SystemMenuBar({ onClose }: ISystemMenuBarProps) {
  const handleClose: MouseEventHandler = (event: MouseEvent) => {
    onClose(event);
  };

  return (
    <SystemMenuBarDiv>
      <StartButton />
    </SystemMenuBarDiv>
  )
}