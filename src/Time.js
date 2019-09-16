import React, { useState } from "react";
import { format } from "date-fns";

const Time = () => {
  const [time, setTime] = useState(format(new Date(), "h:mm a"));

  setInterval(() => {
    setTime(format(new Date(), "h:mm a"));
  }, 1000);

  return <div class="time">{time}</div>;
};

export default Time;
