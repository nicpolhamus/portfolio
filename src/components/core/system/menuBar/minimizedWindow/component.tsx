import { MouseEventHandler } from 'react';
import { useWindowService } from '../../../../../hooks/use.window.service';

interface IMinimizedWindow {
  id: string;
  title?: string;
}

export function MinimizedWindow({ id, title }: IMinimizedWindow): JSX.Element {
  const { toggleMinimize } = useWindowService();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();

    toggleMinimize(id, false);
  }

  return (
    <button onClick={handleClick}>{title ? title : id.substring(0, 5)}</button>
  );
}