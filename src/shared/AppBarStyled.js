import styled from "styled-components";
import { device } from "./device";
const AppBarStyles = styled.div`
  .navbar {
    background: #222d40;
  }
  .navbar-brand {
    color: #aaaaaa;
  }
  .navbar-brand:hover {
    color: #fafafa;
  }
  .badge {
    background-color: #ffd06e;
    color: #222d40;
    font-weight: 800;
  }
  .appIcon {
    font-size: 22px;
    color: #0069d9;
  }
  @media ${device.mobileLand} {
    .navbar {
      height: 8vh;
    }
    .navbar-brand {
      font-size: 8px;
      padding-top: 0;
    }
    .badge {
      font-size: 10px;
      margin-left: 3px;
      font-weight: 600;
    }
    .appIcon {
      font-size: 18px;
    }
  }
  @media ${device.mobileL} {
    .navbar {
      height: 6vh;
    }
    .navbar-brand {
      font-size: 14px;
      padding-top: 0px;
    }
    .badge {
      font-size: 12px;
      margin-left: 3px;
    }
  }
`;

export default AppBarStyles;
