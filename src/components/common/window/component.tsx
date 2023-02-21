import React, { MouseEvent, MouseEventHandler, PropsWithChildren, ReactNode, useState } from 'react';
import { Plane } from '../../../constants/Plane';
import { usePromotableZIndex } from '../../../hooks/use.promotable.zIndex';

import { DragMove, type TPosition } from '../../core';

export interface IWindowProps {
  id: string;
  content?: ReactNode;
  defaultPosition?: TPosition;
  canClose?: boolean;
  checkBounds: (movement: number, plane: Plane) => number;
}

export function Window({
  defaultPosition = { x: 0, y: 0 },
  id,
  canClose = true,
  checkBounds,
  children,
}: PropsWithChildren<IWindowProps>) {  
  const { getZIndex, promoteZIndex, restoreZIndex } = usePromotableZIndex();
  const [translate, setTranslate] = useState(defaultPosition);
  const [isClosed, setIsClosed] = useState(false);

  const handleDragMove: MouseEventHandler = (event: MouseEvent) => {
    const inboundX = checkBounds(event.movementX, Plane.X);
    const inboundY = checkBounds(event.movementY, Plane.Y);

    setTranslate({
      x: translate.x + inboundX,
      y: translate.y + inboundY,
    });
  };


  const handleClose: MouseEventHandler = (event: MouseEvent) => {
    setIsClosed(!isClosed);
  };

  const handleMouseEnter = () => {
    restoreZIndex();
    promoteZIndex(id);
  };

  return (
    <>
      {
        !isClosed && (
          <DragMove 
            onDragMove={handleDragMove}
            zIndex={getZIndex(id)}
            onMouseEnter={handleMouseEnter}
            className="window"
            styles={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            }}
          >
            {/* {canClose && <MenuBar onClose={handleClose} />}
            {!canClose && <MenuBar />} */}
            {children}
          </DragMove>
        )
      }
    </>
  );
}
