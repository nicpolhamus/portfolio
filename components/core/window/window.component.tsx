import { MouseEventHandler, ReactElement, useState } from 'react';
import styles from './window.module.css';

type TPosition = {
  x: number;
  y: number;
};

export interface IWindowPosition {
  positionA: TPosition;
  positionB: TPosition;
}

export interface IWindowProps {
  defaultPosition: IWindowPosition;
}

export function WindowComponent({ defaultPosition }: IWindowProps): ReactElement {
  const [currentPosition, setCurrentPosition] = useState<IWindowPosition>({
    positionA: { x: 0, y: 0 },
    positionB: { x: 0, y: 0 },
  });

  const updateCurrentPosition = (newPosition: IWindowPosition): void => 
    setCurrentPosition({
      positionA: { 
        x: (currentPosition.positionA.x + newPosition.positionA.x),
        y: (currentPosition.positionA.y + newPosition.positionA.y),
      },
      positionB: {
        x: (currentPosition.positionB.x + newPosition.positionB.x),
        y: (currentPosition.positionB.y + newPosition.positionB.y),
      },
    });

  const mouseDown = (event: MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.preventDefault();
    // update just for positionB
    updateCurrentPosition({
      positionA: currentPosition.positionA,
      positionB: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  };

  const mouseMove = (event: MouseEventHandler): MouseEventHandler => {
    event.preventDefault();

    updateCurrentPosition({
      positionA: {
        x: (currentPosition.positionB.x - event.clientX),
        y: (currentPosition.positionB.y - event.clientY),
      },
      positionB: {
        x: event.clientX,
        y: event.clientY
      }
    })
  };

  return (
    <div 
      className={styles.colorScheme}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}>
      Test
    </div>
  );
}
