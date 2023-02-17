import { useContext } from 'react';
import { IWindowContext, WindowContext } from '../stores';

export function useWindowService(): IWindowContext {
  const windowContext = useContext(WindowContext);

  if (!windowContext) {
    throw new Error(`Window context doesn't exist!`);
  }

  return windowContext;
}