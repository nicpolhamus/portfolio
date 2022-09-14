import React, { MouseEvent, MouseEventHandler, ReactElement, useState } from 'react';
import styled from 'styled-components';

import { DragMove, MenuBar, type TPosition } from '../../core';

export interface IWindowProps {
  defaultPosition?: TPosition;
  canClose?: boolean
  children: ReactElement;
}

const WindowDiv = styled.div`
  background: #80868C;
  height: 600px;
  width: 450px;
  border-radius: 6px;
`;

export function WindowComponent({ defaultPosition = { x: 0, y: 0 }, canClose = true, children }: IWindowProps): ReactElement {
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
