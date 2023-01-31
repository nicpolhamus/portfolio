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
          <ul
            role='listbox'
            className={`menu-item-options`}
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
