import React, { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StartDropdownButton = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
`;

const StartDropdownItems = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
`;

export function StartButton(): ReactElement {
  return (
    <DropdownContainer>
      <StartDropdownButton>Start</StartDropdownButton>
      <StartDropdownItems>
      </StartDropdownItems>
    </DropdownContainer>
  );
}
