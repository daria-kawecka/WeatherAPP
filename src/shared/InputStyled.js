import styled from "styled-components";
import { device } from "./device";

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

  @media ${device.laptop} {
    .form-control {
      height: 4vh;
      font-size: 12px;
    }
    .input-group-append {
      height: 4vh;
      line-height: 1.2;
      .btn {
        height: 4vh;
        line-height: 1;
      }
    }
  }
  @media ${device.tabletL} {
    div.mb-3 {
      width: 22vh;
      margin: 10px auto;
    }
  }
  @media ${device.mobileL} {
    .form-control {
      height: 3vh;
    }
    .input-group-append {
      height: 3vh;
      .btn {
        height: 3vh;
        line-height: 0.1;
        svg {
          font-size: 11px;
        }
      }
    }
  }
`;
export default InputStyled;
