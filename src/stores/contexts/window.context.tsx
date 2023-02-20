import { createContext, ReactNode, useState } from 'react';
import { IWindow } from '../../components';

export interface IWindowContext {
  windows: IWindow[];
  add: (window: IWindow, minimized?: boolean) => void;
  get: (windowId?: number) => IWindow[];
  remove: (windowId: number) => IWindow[];
  update: (window: IWindow) => void;
  minimize: (windowId: number) => void;
  minimizedWindows?: IWindow[];
}

export const WindowContext = createContext<IWindowContext | null>(null);

export const WindowProvider = ({
  children,
}: { children?: ReactNode }) => {
  const [windows, setWindows] = useState<IWindow[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<IWindow[]>([]);
  

  const get = (windowId?: number): IWindow[] => {
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

  const remove = (windowId: number): IWindow[] => {
    const currentWindows = windows;
    const windowIndex = windows.findIndex(({ id }) => id === windowId);

    const removedWindow = currentWindows.splice(windowIndex, 1);

    setWindows(currentWindows);

    return removedWindow;
  };

  const update = (window: IWindow): void => {
    remove(window.id);

    add(window);
  };

  const minimize = (windowId: number): void => {
    const [window] = remove(windowId);

    add(window, true);
  };

  const value = {
    windows,
    minimizedWindows,
    get,
    add,
    remove,
    update,
    minimize,
  };

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}