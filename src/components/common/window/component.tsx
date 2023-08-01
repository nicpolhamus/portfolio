import React, { MouseEvent, MouseEventHandler, PropsWithChildren, ReactNode, useState } from 'react';
import { Plane } from '../../../constants/Plane';
import { usePromotableZIndex } from '../../../hooks/use.promotable.zIndex';
import { useWindowService } from '../../../hooks/use.window.service';

import { DragMove, type TPosition } from '../../core';
import { WindowMenuBar } from './menuBar/component';

export interface IWindowProps {
  id: string;
  defaultPosition?: TPosition;
  canClose?: boolean;
  canMinimize?: boolean;
  title?: string;
  checkBounds: (
    movement: number,
    currentPos: number,
    plane: Plane,
  ) => number;
}

export function Window({
  defaultPosition = { x: 10, y: 10 },
  id,
  canClose = true,
  canMinimize = true,
  title,
  checkBounds,
  children,
}: PropsWithChildren<IWindowProps>) {
  const { get, remove, toggleMinimize, update } = useWindowService();
  const { getZIndex, promoteZIndex, restoreZIndex } = usePromotableZIndex();
  const [translate, setTranslate] = useState(defaultPosition);
  const [isClosed, setIsClosed] = useState(false);

  const handleDragMove: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault();

    const inboundX = checkBounds(event.movementX, translate.x, Plane.X);
    const inboundY = checkBounds(event.movementY, translate.y, Plane.Y);

    setTranslate({
      x: inboundX,
      y: inboundY,
    });
  };


  const handleClose: MouseEventHandler = (event: MouseEvent) => {
    setIsClosed(true);

    remove(id);
  };

  const handleMinimize: MouseEventHandler = (event: MouseEvent) => {
    event.preventDefault();

    const [window] = get(id);

    window.defaultPosition = translate;

    update(window);

    toggleMinimize(id);
  };

  const handleMouseEnter = () => {
    restoreZIndex();
    promoteZIndex(id);
  };

  return (
    <>
      {
        !isClosed && (
          <div
            className="window"
            style={{
              zIndex: getZIndex(id),
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
            }}
          >
            <DragMove
              onDragMove={handleDragMove}
              onMouseEnter={handleMouseEnter}
            >
              <WindowMenuBar
                title={title}
                canClose={canClose}
                canMinimize={canMinimize}
                handleClose={handleClose}
                handleMinimize={handleMinimize}
              />
            </DragMove>
            {children}
          </div>
        )
      }
    </>
  );
}
