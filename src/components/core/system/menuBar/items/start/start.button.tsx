import React, { ReactElement, useState } from 'react';
import { StartButtonOptions } from './options';

type TStartOptionsProps = {
  visible: boolean;
  handleVisibility: () => void;
}

function StartOptions({ visible, handleVisibility }: TStartOptionsProps): ReactElement {
  return (
    <>
      {visible && (
          <ul
            role='listbox'
            className={`menu-item-options`}
            tabIndex={-1}
          >
            {StartButtonOptions.map((Option, index) =>
              <Option key={index} handleVisibility={handleVisibility} /> 
            )}    
          </ul>
      )}
    </>
  );
}

export function Start(): ReactElement {
  const [visible, setVisibility] = useState<boolean>(false);

  const handleClick = () => {
    setVisibility(!visible);
  };

  return (
    <>
      <div className='menu-item'>
        <button
          aria-haspopup='listbox'
          aria-expanded={visible}
          type='button'
          onClick={handleClick}
        >
          Start
        </button>
        <StartOptions visible={visible} handleVisibility={handleClick} />
      </div>
    </>
  )
}
