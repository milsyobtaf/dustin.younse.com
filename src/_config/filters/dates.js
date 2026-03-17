import dayjs from 'dayjs';
import {DateTime} from 'luxon';

/** Converts the given date string to ISO8610 format. */
export const toISOString = dateString => dayjs(dateString).toISOString();

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
export const formatDate = (date, format) => dayjs(date).format(format);

// Formatting tokens for luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
export const readableDate = (dateObj, format, zone) => {
  return DateTime.fromJSDate(dateObj, {zone: zone || 'utc'}).toFormat(format || 'dd LLLL yyyy');
};

export const formatDateUS = (dateObj, format, zone) => {
  return DateTime.fromJSDate(dateObj, {zone: zone || 'utc'}).toFormat(format || 'LLLL dd, yyyy');
};

export const formatYear = (dateObj, format, zone) => {
  return DateTime.fromJSDate(dateObj, {zone: zone || 'utc'}).toFormat(format || 'yyyy');
};

export const htmlDateString = dateObj => {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
};
