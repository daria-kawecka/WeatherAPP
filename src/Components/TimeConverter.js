export default function convertTime(time, timezone) {
  //from UNIX timestamp:
  const date = new Date(time * 1000);
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  // obtain the UTC time in milliseconds
  let utc = localTime + localOffset;
  let newDateTime = utc + timezone * 1000;
  let convertedDateTime = new Date(newDateTime);
  return convertedDateTime.toLocaleString().split(",")[1].slice(0, 6);
}
