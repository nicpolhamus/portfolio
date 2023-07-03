import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';

export interface ShortcutProps {
  icon: IconDefinition,
  onClick: MouseEventHandler<HTMLAnchorElement>;
  border?: boolean,
  size?: SizeProp,
}

export function Shortcut({ border, icon, onClick, size }: ShortcutProps) {
  return (
    <>
      <a onClick={onClick}>
        <FontAwesomeIcon border={border} icon={icon} size={size}/>
      </a>
    </>
  );
}
