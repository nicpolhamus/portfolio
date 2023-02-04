import React, { MouseEvent, MouseEventHandler, ReactElement, useState } from 'react';

import { DragMove, MenuBar, type TPosition } from '../../core';

export interface IWindowProps {
  defaultPosition?: TPosition;
  canClose?: boolean
  children: ReactElement;
}

export function Window({ defaultPosition = { x: 0, y: 0 }, canClose = true, children }: IWindowProps): ReactElement {
  const [translate, setTranslate] = useState(defaultPosition);
  const [isClosed, setIsClosed] = useState(false);

  const handleDragMove: MouseEventHandler = (event: MouseEvent) => {
    setTranslate({
      x: translate.x + event.movementX,
      y: translate.y + event.movementY,
    });
  };

  const handleClose: MouseEventHandler = (event: MouseEvent) => {
    setIsClosed(!isClosed);
  };


  return (
    <>
      {!isClosed && (<DragMove onDragMove={handleDragMove}>
        <div
          className="window"
          style={{
            transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
          }}>
          <WindowDiv>
            {canClose && <MenuBar onClose={handleClose} />}
            {!canClose && <MenuBar />}
            {children}
          </WindowDiv>
        </div>
      </DragMove>)}
    </>
  );
}
