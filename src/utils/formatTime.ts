import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatTime(date: string) {
  return dayjs(date)
    .fromNow()
    .replace(/\bhours?\b/, "hrs")
    .replace(/\bminutes?\b/, "mins")
    .replace(/\bseconds?\b/, "secs")
    .replace("ago", ". ago");
}
