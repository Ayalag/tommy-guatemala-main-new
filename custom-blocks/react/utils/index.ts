/**
 * A comma is added as a decimal separator
 */
export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
}

/**
 * Add zero if the unit is less than 10.
 */
export const formatTime = (time: number | string) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};
