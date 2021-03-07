import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
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

export const Input = ({ onClick, onChange, onEnter }) => (
  <InputStyles>
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter city..."
          aria-label="Enter city..."
          aria-describedby="basic-addon2"
          className="shadow"
          onChange={onChange}
          onKeyPress={onEnter}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={onClick}>
            <BsSearch />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </InputStyles>
);
