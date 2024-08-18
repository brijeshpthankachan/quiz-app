export const MAX_TIME = 30;
export enum THEME {
  "LIGHT" = "light",
  "DARK" = "dark",
  "SYSTEM" = "system",
}
export const BASE_POINT = 300;
export const BONUS_PERCENTAGE = 5;
export const BONUS_POINT = (remainingTime: number) =>
  MAX_TIME -
  remainingTime * (((BASE_POINT * BONUS_PERCENTAGE) / BASE_POINT) * 100);
