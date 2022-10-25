import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { SystemMenuBar } from './system.menuBar.component';



const SystemWindowContent = styled.div`
  text-align: center;
  float: clear;
`;

export function SystemWindowComponent() {
  const handleClose: MouseEventHandler = () => {
    alert('tried to close');
  };

  return (
    <>
      <SystemWindowContent>

      </SystemWindowContent>
      <SystemMenuBar onClose={handleClose}/>
    </>
  );
}