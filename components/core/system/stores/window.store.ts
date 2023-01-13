import { TWindow } from '../../types';

export interface IWindowStore {
  windows: TWindow[];
  addWindow: Function;
  clearWindows: Function;
  removeWindow: Function;
  // is this needed?
  updateWindow: Function;
}

export const WindowStore = (set: any, produce: Function) => ({
  windows: new Map(),
  addWindow: (window: TWindow) =>
    set(
      produce((draft: IWindowStore) => {
        draft.windows.push(window);
      })
    ),
  clearWindows: () => {
    set(
      produce((draft: IWindowStore) => {
        draft.windows = [];
      })
    )
  },
  removeWindow: (windowId: number) =>
    set(
      produce((draft: IWindowStore) => {
        const windowIndex = draft.windows.findIndex(({ id }) => id === windowId);

        draft.windows = draft.windows.splice(windowIndex, 1);
      })
    ),
  updateWindow: (updatedWindow: TWindow) =>
    set(
      produce((draft: IWindowStore) => {
        const windowIndex = draft.windows.findIndex(({ id }) => id === updatedWindow.id);
        
        draft.windows[windowIndex] = updatedWindow;
      })
    ),
});