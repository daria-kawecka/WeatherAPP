import styled from "styled-components";

const AsideCardStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  .card {
    width: 20rem;
    background-color: rgba(1, 24, 68, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    color: #e4e2e2;
  }
  .icons {
    font-size: 2.5rem;
  }
  .card-title {
    font-size: 2rem;
    border-bottom: 2px solid #e4e2e2;
  }
  .text-muted {
    font-size: 1.2rem;
    color: #c4c4c3 !important;
  }
  .card-text {
    font-size: 1.4rem;
  }
  .icons {
    font-size: 1.6rem;
  }
`;

export default AsideCardStyles;
