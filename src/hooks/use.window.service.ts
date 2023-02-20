import { useContext } from 'react';
import { IWindowContext, WindowContext } from '../stores';

export function useWindowService(): IWindowContext {
  const windowContext = useContext(WindowContext) as IWindowContext;

  return windowContext;
}