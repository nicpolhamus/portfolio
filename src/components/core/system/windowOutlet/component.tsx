import { ReactElement, useMemo } from 'react';

import { Window } from '../../../';
import { useWindowService } from '../../../../hooks/use.window.service';

export function WindowOutlet(): ReactElement {
  // window state utilites 
  const { windows } = useWindowService();

  const activeWindows = useMemo(() => windows, [windows]);

  return (
    <div>
      { 
        activeWindows.map(({ id, defaultPosition, zIndex, content }) => 
          (<Window defaultPosition={defaultPosition} key={id} zIndex={zIndex}>{content}</Window>)
        )
      }
    </div>
  )
}