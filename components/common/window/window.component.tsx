import React, { ReactElement, useState } from 'react';
import { DragMove } from '../../core';

type TPosition = {
  x: number;
  y: number;
};

export interface IWindowProps {
  defaultPosition?: TPosition;
}

// TODO: update component to use DragMove
export function WindowComponent({ defaultPosition }: IWindowProps): ReactElement {
  const basePosition = { x: 0, y: 0 };
  const [translate, setTranslate] = useState(defaultPosition || basePosition);

  const handleDragMove = (event: any) => {
    setTranslate({
      x: translate.x + event.movementX,
      y: translate.y + event.movementY, 
    });
  };

  
  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        style={{
          background: '#985',
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
          height: '500px',
          width: '40%',
        }}>
        Test
      </div>
    </DragMove>
  );
}
