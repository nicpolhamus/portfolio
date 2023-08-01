import React, { ReactElement, useState } from 'react';

import { AppListOptions } from './apps.list';
import { IOptionProps } from '..';

type TAppListProps = {
  visible: boolean;
  handleVisibility: () => void;
}

function AppList({ visible, handleVisibility }: TAppListProps): ReactElement {
  return (
    <>
      {visible && (
        <ul
          role='listbox'
          className='menu-item-options-right'
          tabIndex={-1}
        >
          {AppListOptions.map((App, index) =>
            <App key={index} handleVisibility={handleVisibility} />
          )}
        </ul>
      )}
    </>
  )
}

export function AppsButton({ handleVisibility }: IOptionProps): ReactElement {
  const [visible, setVisibility] = useState<boolean>(false);

  const handleClick = (): void => {
    setVisibility(!visible);
  };

  return (
    <>
      <li
        aria-haspopup='listbox'
        aria-expanded={visible}
      > 
        <button onClick={handleClick}>
          Apps
        </button>
        <AppList visible={visible} handleVisibility={handleVisibility} />
      </li>
    </>
  );
}