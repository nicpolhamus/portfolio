import React, { ReactElement, useRef, useState } from 'react';

export interface IDragMoveProps {
  styles?: Record<string, string>;
  className?: string;
  children: ReactElement;
  onDragMove: (event: any) => void;
}

export function DragMove({ children, className, styles, onDragMove }: IDragMoveProps): ReactElement {
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: any) => {
    setIsDragging(true);

    onDragMove(event);
  };

  const handlePointerUp = (event: any) => {
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
      style={styles}
      className={className}>
      {children}
    </div>
  );
}