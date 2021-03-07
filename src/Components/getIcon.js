import { WiCloudy } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiNightShowers } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiNightAltRain } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiNightAltSleetStorm } from "react-icons/wi";
import { WiDust } from "react-icons/wi";

export default function getIcon(symbol) {
  switch (symbol) {
    case "01d":
    case "01n":
      return <WiSunset />;
    case "02d":
    case "02n":
      return <WiDaySunnyOvercast />;
    case "03d":
      return <WiDaySunnyOvercast />;
    case "03n":
      return <WiNightAltCloudy />;
    case "04d":
    case "04n":
      return <WiCloudy />;
    case "09d":
      return <WiDayShowers />;
    case "09n":
      return <WiNightShowers />;
    case "10d":
      return <WiDayRain />;
    case "10n":
      return <WiNightAltRain />;
    case "11d":
      return <WiDaySleetStorm />;
    case "11n":
      return <WiNightAltSleetStorm />;
    case "13d":
    case "13n":
      return <WiSnow />;
    case "50d":
      return <WiDust />;
    default:
      return <WiSunset />;
  }
}
