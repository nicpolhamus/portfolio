import { useMemo } from 'react';

import { Window } from '../../../';
import { Plane } from '../../../../constants/Plane';
import { useWindowService } from '../../../../hooks/use.window.service';

interface IWindowOutlet {
  checkBounds: (movement: number, plane: Plane) => number;
}

export function WindowOutlet({ checkBounds }: IWindowOutlet) {
  // window state utilites 
  const { windows } = useWindowService();

  const activeWindows = useMemo(() => windows, [windows]);

  return (
    <>
      { 
        activeWindows.map(({ id, defaultPosition, content }) => 
          (
            <Window
              checkBounds={checkBounds}
              defaultPosition={defaultPosition}
              key={id}
              id={id}
            >
              {content}
            </Window>
          )
        )
      }
    </>
  )
}