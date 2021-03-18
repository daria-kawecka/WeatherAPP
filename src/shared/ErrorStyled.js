import styled from "styled-components";

export const ErrorStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
