import React from "react";

export default function FormattedDate(props) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = props.date.toLocaleDateString("en-US", options);
  return formattedDate;
}
