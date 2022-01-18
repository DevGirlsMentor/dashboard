import { useEffect, useState } from "react";
import { formatDate, getHours } from "../../helpers";

export const ShowDate = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time>
      {formatDate(date)}
      <br />
      {getHours(date)}
    </time>
  );
};
