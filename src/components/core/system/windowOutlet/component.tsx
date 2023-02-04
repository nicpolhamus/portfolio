import { ReactElement, useMemo } from 'react';
import { useStore } from '../../../../src/stores';

import { IWindowStore } from '../../../../src/stores/window.store';
import { Window } from '../../../';

export function WindowOutlet(): ReactElement {
  // window state utilites
  const { windows } = useStore(
    (state: any): IWindowStore => ({
      windows: state.windows,
      addWindow: state.addWindow,
      clearWindows: state.clearWindows,
      removeWindow: state.removeWindow,
      updateWindow: state.updateWindow,
    })
  );

  const activeWindows = useMemo(() => {
    // setup initial windows
    if (windows.length) {
      return windows.filter(({ minimized }) => !minimized);  
    }
    
    return [];
  }, [windows]);

  return (
    <div>
      {
        !!activeWindows.length && 
        activeWindows.map(({ defaultPosition, children }, index) => 
          (<Window  defaultPosition={defaultPosition} key={index}>{children}</Window>)
        )
      }
    </div>
  )
}