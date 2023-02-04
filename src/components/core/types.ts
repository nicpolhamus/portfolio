import { ReactElement } from 'react';
import { IWindowProps } from '../common/window/component';

export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export interface IWindow {
  id: number;
  zIndex: string;
  minimized: boolean;
}

export type TWindowComponent = IWindow & IWindowProps;