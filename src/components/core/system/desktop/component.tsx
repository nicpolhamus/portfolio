import { MouseEventHandler } from "react";
import { WindowOutlet } from "..";
import { Plane } from "../../../../constants/Plane";

import { DesktopMenuBar } from "../menuBar/component";
import { Start } from "../menuBar/items";
import { Shortcut } from '../shortcut/component';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

interface IDesktop {
  height: number;
  width: number;
}

export function Desktop({ height, width }: IDesktop) {

  const handleClose: MouseEventHandler = () => {
    alert("tried to close");
  };

  const checkBounds = (
    movement: number,
    currentPos: number,
    plane: Plane
  ): number => {
    const delta = currentPos + movement;
    
    switch (plane) {
      case Plane.X:
        if (delta < width && delta > 0) {
          return delta;
        }
      case Plane.Y:
        if (delta < height && delta > 0) {
          return delta;
        }
      default: 
        return currentPos;
    }
  };

  return (
    <div className="desktop">
      <DesktopMenuBar items={[Start]} />
      {/* need to set a window outlet here */}
      <WindowOutlet checkBounds={checkBounds} />
    </div>
  );
}
