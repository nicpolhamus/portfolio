import { createContext, Dispatch, SetStateAction} from 'react';

import { TWindow } from '../../components/core/types';

export interface IWindowContext {
  windows: TWindow[];
  minimizedWindows?: TWindow[];
}

export const WindowContext = createContext<IWindowContext>({ windows: [] });