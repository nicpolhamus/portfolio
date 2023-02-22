import { createContext, ReactNode, useState } from 'react';
import { IWindow } from '../../components';

export interface IWindowContext {
  windows: IWindow[];
  add: (window: IWindow, minimized?: boolean) => void;
  get: (windowId?: string) => IWindow[];
  remove: (windowId: string) => IWindow[];
  update: (window: IWindow) => void;
  toggleMinimize: (windowId: string, minimized?: boolean) => void;
  minimizedWindows?: IWindow[];
}

export const WindowContext = createContext<IWindowContext | null>(null);

export const WindowProvider = ({
  children,
}: { children?: ReactNode }) => {
  const [windows, setWindows] = useState<IWindow[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<IWindow[]>([]);
  

  const get = (windowId?: string): IWindow[] => {
    const window = windows.find(({ id }) => id === windowId);

    if (window) {
      return [window];
    }

    return windows;
  };

  const add = (window: IWindow, minimized = false): void => {
    if (minimized) {
      setMinimizedWindows(minimizedWindows.concat(window));
    } else {
      setWindows(windows.concat(window));
    }
  };

  const remove = (windowId: string, minimized = false): IWindow[] => {
    let removedWindow: IWindow[];

    if (!minimized) {
      const currentWindows = windows;
      const windowIndex = windows.findIndex(({ id }) => id === windowId);
  
      removedWindow = currentWindows.splice(windowIndex, 1);

      setWindows(currentWindows);
    } else {
      const currentMinimizedWindows = minimizedWindows;
      const windowIndex = minimizedWindows.findIndex(({ id }) => id === windowId);

      removedWindow = currentMinimizedWindows.splice(windowIndex, 1);
    }

    return removedWindow;
  };

  const update = (window: IWindow): void => {
    setWindows([ window, ...windows ]);
  };

  const toggleMinimize = (windowId: string, minimized = true): void => {
    const [window] = remove(windowId, !minimized);

    add(window, minimized);
  };

  const value = {
    windows,
    minimizedWindows,
    get,
    add,
    remove,
    update,
    toggleMinimize,
  };

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}