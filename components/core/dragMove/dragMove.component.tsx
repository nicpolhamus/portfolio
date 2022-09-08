import { ReactElement, useState } from 'react';

export interface IDragMoveProps {
  styles: Record<string, string>;
  className: string;
  children: ReactElement;
}

export function DragMove({ children, className, styles }: IDragMoveProps) {
  const [translate, setTranslate] = useState({ x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);

  const handleDragMove = (event: any) => {
    setTranslate({
      x: translate.x + event.movementX,
      y: translate.y + event.movementY
    });
  };

  const handlePointerDown = (event: any) => {
    setIsDragging(true);

    handleDragMove(event);
  };

  const handlePointerUp = (event: any) => {
    setIsDragging(false);
  }

  const handlePointerMove = (event: any) => {
    if (isDragging) {
      handleDragMove(event);
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