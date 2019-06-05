export const secToTime = (s) => {
  let t;
  if (s > -1) {
    const hour = Math.floor(s / 3600);
    const min = Math.floor(s / 60) % 60;
    const sec = s % 60;
    if (hour === 0) {
      t = '';
    } else if (hour < 10) {
      t = `0${hour}:`;
    } else {
      t = `${hour}:`;
    }

    if (min < 10) { t += '0'; }
    t += `${min}:`;
    if (sec < 10) { t += '0'; }
    t += sec.toFixed(0);
  }
  return t;
};
