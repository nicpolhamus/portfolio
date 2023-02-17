import { ReactElement, useMemo } from 'react';

import { Window } from '../../../';
import { useWindowService } from '../../../../hooks/use.window.service';

export function WindowOutlet(): ReactElement {
  // window state utilites 
  const { windows } = useWindowService();

  return (
    <div>
      { 
        windows.map(({ id, defaultPosition, zIndex, content }) => 
          (<Window defaultPosition={defaultPosition} key={id} zIndex={zIndex}>{content}</Window>)
        )
      }
    </div>
  )
}