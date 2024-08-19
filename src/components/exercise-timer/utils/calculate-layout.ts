export function calculateLayout(seconds: number, time: number) {
  if (seconds <= 0 || time <= 0) return 0;
  return Math.ceil((seconds / time) * 100);
}
