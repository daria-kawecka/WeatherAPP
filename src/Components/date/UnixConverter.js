import { days } from "./days";
import { months } from "./months";

export default function convertTime(unix_timestamp) {
  //from UNIX timestamp:
  const newDate = new Date(unix_timestamp * 1000);

  let month = months[newDate.getMonth()];
  let day = days[newDate.getDay()].slice(0, 3);
  let date = newDate.getDate();
  //create new date :
  let time = day + ", " + date + " " + month;

  return time;
}
