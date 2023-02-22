import React, { PropsWithChildren, ReactNode, useState } from 'react';

export interface IDragMoveProps {
  onDragMove: (event: any) => void;
  onMouseEnter: () => void;
}

export function DragMove({ onDragMove, onMouseEnter, children }: PropsWithChildren<IDragMoveProps>){
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: any) => {
    setIsDragging(true);

    onDragMove(event);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  }

  const handlePointerMove = (event: any) => {
    if (isDragging) {
      onDragMove(event);
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}