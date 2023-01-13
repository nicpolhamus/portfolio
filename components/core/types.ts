import { ReactElement } from 'react';
import { IWindowProps } from '../common/window/component';

export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export type TMenuItem = {
  text: string;
  action: TAction;
};

export type TWindow = {
  id: number;
  zIndex: string;
  minimized: boolean;
} & IWindowProps;