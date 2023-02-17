import React, { ReactElement, useState } from 'react';
import { StartButtonOptions } from './options';

type TStartOptionsProps = {
  visible: boolean;
}

function StartOptions({ visible }: TStartOptionsProps): ReactElement {
  return (
    <>
      {visible && (
          <ul
            role='listbox'
            className={`menu-item-options`}
            tabIndex={-1}
          >
            {StartButtonOptions.map((Option, index) =>
              <Option key={index} /> 
            )}    
          </ul>
      )}
    </>
  );
}

export function Start(): ReactElement {
  const [visible, setVisibility] = useState<boolean>(false);

  const handleClick = (event: any) => {
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
        <StartOptions visible={visible}/>
      </div>
    </>
  )
}
