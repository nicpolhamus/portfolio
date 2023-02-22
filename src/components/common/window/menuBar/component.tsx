import { MouseEventHandler } from 'react';

interface IWindowMenuBar {
  canClose?: boolean;
  canMinimize?: boolean;
  handleClose?: MouseEventHandler<Element>;
  handleMinimize?: MouseEventHandler<Element>;
}

export function WindowMenuBar({ canClose, canMinimize, handleClose, handleMinimize }: IWindowMenuBar): JSX.Element {
  return (
    <div className='window-menu-bar'>
      <div className='menu-buttons'>
        {/* TODO: handle logos */}
        <button>test</button>
      </div>
      <div className='window-buttons'>
        <>
          {
            canMinimize && (
              <button onClick={handleMinimize}>-</button>
            )
          }
        </>
        <>
          {
            canClose && (
              <button onClick={handleClose}>X</button>
            )
          }
        </>
      </div>
    </div>
  );
}