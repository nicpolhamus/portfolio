import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import { DragMove, MenuBar } from '../../core';

type TPosition = {
  x: number;
  y: number;
};

export interface IWindowProps {
  defaultPosition?: TPosition;
}

const WindowDiv = styled.div`
  background: #80868C;
  height: 600px;
  width: 450px;
  border-radius: 6px;
`;

export function WindowComponent({ defaultPosition }: IWindowProps): ReactElement {
  const basePosition = { x: 0, y: 0 };
  const [translate, setTranslate] = useState(defaultPosition || basePosition);
  const [isClosed, setIsClosed] = useState(false);

  const handleDragMove = (event: any) => {
    setTranslate({
      x: translate.x + event.movementX,
      y: translate.y + event.movementY,
    });
  };

  const handleClose = (event: any) => {
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
            <MenuBar onClose={handleClose} />
            Test
          </WindowDiv>
        </div>
      </DragMove>)}
    </>
  );
}
