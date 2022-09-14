import styled from "styled-components";

import { MenuBar } from "..";

const SystemWindowContent = styled.div`
  text-align: center;
  float: clear;
`;

export function SystemWindowComponent() {
  return (
    <>
      <SystemWindowContent>

      </SystemWindowContent>
      <MenuBar></MenuBar>
    </>
  );
}