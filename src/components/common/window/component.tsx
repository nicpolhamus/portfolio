import React, { MouseEvent, MouseEventHandler, PropsWithChildren, ReactElement, ReactNode, useState } from 'react';

import { DragMove, type TPosition } from '../../core';

export interface IWindowProps {
  zIndex: string;
  content?: ReactNode;
  defaultPosition?: TPosition;
  canClose?: boolean;
}

export function Window({ defaultPosition = { x: 0, y: 0 }, canClose = true, children }: PropsWithChildren<IWindowProps>): ReactElement {
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
          <div>
            {/* {canClose && <MenuBar onClose={handleClose} />}
            {!canClose && <MenuBar />} */}
            {children}
          </div>
        </div>
      </DragMove>)}
    </>
  );
}
