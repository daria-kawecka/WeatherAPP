import React, { useState } from "react";

import InputGroup from "react-bootstrap/InputGroup";
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
    outline: none;
    border-color: #007bff;
  }
  .form-control:valid,
  .form-control:valid:focus {
    background-image: none;
    border-color: #007bff;
  }
`;

const Input = ({ onClick, onChange, onEnter }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <InputStyles>
      <Form validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3" size="m">
          <Form.Control
            placeholder="Enter city..."
            type="text"
            className="shadow"
            onChange={onChange}
            onKeyPress={onEnter}
            required
          />
          <InputGroup.Append>
            <Button type="submit" variant="primary" onClick={onClick}>
              <BsSearch />
            </Button>
          </InputGroup.Append>
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid city.
          </Form.Control.Feedback>
        </InputGroup>
      </Form>
    </InputStyles>
  );
};

export default Input;
