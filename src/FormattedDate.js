export default function FormattedDate(props) {
  if (props.type === "Info") {
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
  } else {
    const options = { weekday: "short" };
    const formattedDate = props.date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
}
