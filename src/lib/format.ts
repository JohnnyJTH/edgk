import { DateTime } from "luxon";

export function dateFormatter(date: Date): string {
    const datetime = DateTime.fromJSDate(date).setLocale('da');
    return `${datetime.toLocaleString(DateTime.DATE_HUGE)} (${datetime.toRelative({ unit: ["years", "months", "weeks", "days"] })})`;
}