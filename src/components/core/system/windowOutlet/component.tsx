import { ReactElement, useMemo } from 'react';

import { Window } from '../../../';
import { useWindowService } from '../../../../hooks/use.window.service';

export function WindowOutlet(): ReactElement {
  // window state utilites 
  const windowService = useWindowService();
  
  const windows = windowService.get();

  const activeWindows = useMemo(() => {
    // setup initial windows
    if (windows && Array.isArray(windows)) {
      return windows.filter(({ minimized }) => !minimized);  
    }

    if (windows) {
      return [windows];
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