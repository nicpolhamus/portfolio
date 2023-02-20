import React, { ReactNode, useState } from 'react';

export interface IDragMoveProps {
  styles?: Record<string, string>;
  className?: string;
  zIndex: number;
  children: ReactNode;
  onDragMove: (event: any) => void;
  onMouseEnter: () => void;
}

export function DragMove({ 
  children,
  className,
  zIndex,
  styles,
  onDragMove,
  onMouseEnter,
}: IDragMoveProps) {
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
      style={{ zIndex, ...styles }}
      className={className}
    >
      {children}
    </div>
  );
}