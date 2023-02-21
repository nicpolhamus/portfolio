import { MouseEventHandler } from "react";
import { WindowOutlet } from "..";
import { Plane } from "../../../../constants/Plane";
import { PromotableZIndexProvider } from "../../../../stores/contexts/promotableZIndex.context";

import { DesktopMenuBar } from "../menuBar/component";
import { Start } from "../menuBar/items";

interface IDesktop {
  height: number;
  width: number;
}

export function Desktop({ height, width }: IDesktop) {
  const handleClose: MouseEventHandler = () => {
    alert("tried to close");
  };

  const checkBounds = (movement: number, plane: Plane): number => {
    const max = plane === Plane.X ? width : height;

    if (movement < 0) {
      return 0;
    }

    if (movement > max) {
      return movement - width;
    }

    return movement;
  };

  return (
    <div className="desktop">
      <DesktopMenuBar items={[Start]} />
      {/* need to set a window outlet here */}
      <WindowOutlet checkBounds={checkBounds} />
    </div>
  );
}
