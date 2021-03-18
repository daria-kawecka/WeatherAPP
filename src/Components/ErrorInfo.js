import React from "react";
import { BiError } from "react-icons/bi";
import { IconContext } from "react-icons";
import { ErrorStyled } from "../shared/ErrorStyled";
import { ErrorText } from "../shared/ErrorStyled";

export const ErrorInfo = () => (
  <ErrorStyled>
    <ErrorText>
      <IconContext.Provider
        value={{
          className: "icon-error",
        }}
      >
        <BiError />
      </IconContext.Provider>
      Something went wrong...
    </ErrorText>
  </ErrorStyled>
);
