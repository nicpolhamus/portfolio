import { MouseEventHandler } from 'react';
import { useWindowService } from '../../../../../hooks/use.window.service';

interface IMinimizedWindow {
  id: string;
}

export function MinimizedWindow({ id }: IMinimizedWindow): JSX.Element {
  const { toggleMinimize } = useWindowService();

  const handleClick: MouseEventHandler = (event) => {
    event.preventDefault();

    toggleMinimize(id, false);
  }

  return (
    <button onClick={handleClick}>{id.substring(0, 5)}</button>
  );
}