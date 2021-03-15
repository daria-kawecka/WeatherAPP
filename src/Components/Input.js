import React, { useState } from "react";

import InputStyled from "../shared/InputStyled";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BsSearch } from "react-icons/bs";

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
    <InputStyled>
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
    </InputStyled>
  );
};

export default Input;
