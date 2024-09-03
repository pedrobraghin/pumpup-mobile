export function formatTime(seconds: number) {
  const minutos = Math.floor((seconds % 3600) / 60);
  const segundos = seconds % 60;

  const minutosFormatados = String(minutos);
  const segundosFormatados = String(segundos).padStart(2, "0");

  return `${minutosFormatados}m${segundosFormatados}s`;
}
