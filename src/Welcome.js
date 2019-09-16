import React, { useState } from "react";
import { format } from "date-fns";

const Welcome = () => {
  const [date, setDate] = useState(format(new Date(), "eeee, LLLL do y"));

  setInterval(() => {
    setDate(format(new Date(), "eeee, LLLL do y"));
  }, 10000);

  return <div class="welcome">Welcome back! It is {date}</div>;
};

export default Welcome;
