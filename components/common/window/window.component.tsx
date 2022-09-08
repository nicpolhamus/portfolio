import { MouseEventHandler, ReactElement, useEffect, useRef, useState } from 'react';

type TPosition = {
  x: number;
  y: number;
};

export interface IWindowPosition {
  current: TPosition;
  previous: TPosition;
} 

export interface IWindowProps {
  defaultPosition: IWindowPosition;
}

// TODO: update component to use DragMove
export function WindowComponent({ defaultPosition }: IWindowProps): ReactElement {
  const divRef = useRef<HTMLDivElement>(null);
  let offsetTop: number = 0;
  let offsetLeft: number = 0;

  const [current, setcurrent] = useState<IWindowPosition>({
    current: { x: 0, y: 0 },
    previous: { x: 0, y: 0 },
  });

  const updatecurrent = (newPosition: IWindowPosition): void => 
    setcurrent({
      current: { 
        x: (current.current.x + newPosition.current.x),
        y: (current.current.y + newPosition.current.y),
      },
      previous: {
        x: (current.previous.x + newPosition.previous.x),
        y: (current.previous.y + newPosition.previous.y),
      },
    });

  const mouseDown = (event: any): void => {
    event.preventDefault();
    // update just for previous
    updatecurrent({
      current: current.current,
      previous: current.current,
    });
  };

  const mouseMove = (event: any) => {
    event.preventDefault();

    updatecurrent({
      current: {
        x: (current.previous.x - event.clientX),
        y: (current.previous.y - event.clientY),
      },
      previous: {
        x: event.clientX,
        y: event.clientY
      }
    });
  };

  return (
    <div 
      ref={divRef}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      style={{
        background: '#985',
        cursor: 'move',
        top: `${offsetTop - current.current.y}px`,
        left: `${offsetLeft - current.current.x}px`,
      }}>
      Test
    </div>
  );
}
