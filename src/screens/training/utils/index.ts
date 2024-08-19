export function clearInput(value: string) {
  let validValue: string;

  if (isNaN(Number(value))) {
    const numbersOnly = value.replace(/\D+/g, "");
    validValue = numbersOnly;
  } else {
    validValue = value;
  }

  let roundedValue: number;

  if (validValue.trim()) {
    roundedValue = Math.floor(Number(validValue));
  } else {
    roundedValue = Number(value);
  }

  return roundedValue;
}
