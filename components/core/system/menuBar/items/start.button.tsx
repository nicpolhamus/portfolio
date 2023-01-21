import React, { ReactElement, useState } from 'react';

const startButtonOptions = [
  'Hello',
  'World',
];

type TStartOptionsProps = {
  visible: boolean;
}

function StartOptions({ visible }: TStartOptionsProps): ReactElement {
  return (
    <>
      {visible && (
        <div className='menu-item-options'>
          <ul
            role='listbox'
            className={`${visible ? 'show' : ''}`}
            tabIndex={-1}
          >
            {startButtonOptions.map((option, index) => (
              <li
                tabIndex={0}
                key={index}
              >
                {option}
              </li>
            ))}    
          </ul>
        </div>
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
      <div>
        <button
          aria-haspopup='listbox'
          aria-expanded={visible}
          className='menu-item'
          type='button'
          onClick={handleClick}
        >
          Start
        </button>
      </div>
      <StartOptions visible={visible}/>
    </>
  )
}
