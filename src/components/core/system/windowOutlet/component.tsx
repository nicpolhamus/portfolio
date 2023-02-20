import { useMemo } from 'react';

import { Window } from '../../../';
import { useWindowService } from '../../../../hooks/use.window.service';

export function WindowOutlet() {
  // window state utilites 
  const { windows } = useWindowService();

  const activeWindows = useMemo(() => windows, [windows]);

  return (
    <>
      { 
        activeWindows.map(({ id, defaultPosition, content }) => 
          (<Window defaultPosition={defaultPosition} key={id} id={id}>{content}</Window>)
        )
      }
    </>
  )
}