import { ReactElement, ReactNode } from 'react';
import { IWindowProps } from '../common/window/component';

export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export interface IWindow {
  id: number;
  zIndex: string;
  minimized?: boolean;
  defaultPosition?: TPosition;
  content?: ReactNode;
}

export type TWindowComponent = IWindow;