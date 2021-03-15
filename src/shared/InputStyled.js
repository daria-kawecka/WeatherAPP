import styled from "styled-components";

const InputStyled = styled.div`
  div.mb-3 {
    width: 35vh;
    margin: 20px auto;
  }
  .form-control {
    font-weight: 100;
    outline: none;
    border-color: #007bff;
    color: #949494;
  }
  .form-control:valid,
  .form-control:valid:focus {
    background-image: none;
    border-color: #007bff;
  }
  .form-control:valid:focus {
    color: black;
  }
`;
export default InputStyled;
