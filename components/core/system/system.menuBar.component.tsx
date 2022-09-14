import React from "react";
import styled from "styled-components";
import { TMenuItem } from "../types";

export interface ISystemMenuBarProps {
  items?: TMenuItem[];
  onClose: (args: any) => void;
}

const SystemMenuBarDiv = styled.div`
`;

export function SystemMenuBar({ items, onClose }: ISystemMenuBarProps) {

}