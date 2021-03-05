import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const InputStyles = styled.div`
  div.mb-3 {
    width: 35vh;
    margin: 20px auto;
  }
  .form-control {
    font-weight: 100;
  }
`;

export const Input = ({ onClick, onChange }) => (
  <InputStyles>
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter city..."
        aria-label="Enter city..."
        aria-describedby="basic-addon2"
        className="shadow"
        onChange={onChange}
      />
      <InputGroup.Append>
        <Button variant="primary" onClick={onClick}>
          <BsSearch />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  </InputStyles>
);
