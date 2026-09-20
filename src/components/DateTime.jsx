import React, { useEffect, useState } from "react";

const DateTime = () => {
  //use state
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => setCurrentDate(new Date());
    const timer = setInterval(updateDate, 1000);

    return () => clearInterval(timer);
  }, []);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const hours = currentDate.getHours();
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = String(currentDate.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";

  return (
    <time dateTime={currentDate.toISOString()}>
      {weekdays[currentDate.getDay()]} {currentDate.getDate()}{" "}
      {months[currentDate.getMonth()]} {formattedHours}:{formattedMinutes}
      {period}
    </time>
  );
};

export default DateTime;
