import styled from "styled-components";

export const ErrorStyled = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const ErrorText = styled.p`
  font-size: 2.4em;
  margin-bottom: 0;
  .icon-error {
    font-size: 1.5em;
    color: #ffd06e;
  }
`;
