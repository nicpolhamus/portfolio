import { ReactNode } from 'react';

export type TAction = (args: any) => void;

export type TPosition = {
  x: number;
  y: number;
};

export interface IWindow {
  id: string;
  title?: string;
  minimized?: boolean;
  defaultPosition?: TPosition;
  content?: ReactNode;
}