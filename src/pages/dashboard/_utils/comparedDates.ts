import dayjs from 'dayjs';

export const comparedDates = (start: string, end: string) => {
  const startDay = dayjs(start);
  const endDay = dayjs(end);
  const diff = endDay.diff(startDay, 'day');
  console.log(diff);
  const dates = [];

  for (let i = 1; i <= diff + 1; i++) {
    dates.push(dayjs(startDay).subtract(i, 'day').format('YYYY-MM-DD'));
  }
  return dates;
};
