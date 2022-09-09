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

  const isInHeightBounds = (y: number): boolean => (y <= window.innerHeight && y >= 0);
  const isInWidthBounds = (x: number): boolean => (x <= window.innerWidth && x >= 0);

  const getTranslation = (x: number, y: number) => {
    let newY = y;
    let newX = x;

    if (!isInWidthBounds(x)) {
      if (x < 0) {
        newX = 0;
      }
      
      if (newX > window.innerWidth) {
        newX = window.innerWidth;
      }
    }

    if (!isInHeightBounds(y)) {
      if (y < 0) {
        newY = 0;
      }
      
      if (newY > window.innerHeight) {
        newY = window.innerHeight;
      }
    }

    return { newX, newY };
  }

  const handleDragMove = (event: any) => {
    // TODO: add checks to ensure that window doesn't move outside of viewport
    const { newX: x, newY: y } = getTranslation(
      translate.x + event.movementX,
      translate.y + event.movementY,
    )
    setTranslate({ x, y });
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
