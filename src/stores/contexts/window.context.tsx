import { createContext } from 'react';

import { TWindowComponent } from '../../components/core/types';

export interface IWindowContext {
  windows: TWindowComponent[];
  minimizedWindows?: TWindowComponent[];
}

export const WindowContext = createContext<IWindowContext>({ windows: [] });