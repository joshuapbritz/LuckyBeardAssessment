export function prettify(input: string): string {
  input = `${input[0].toUpperCase()}${input.substring(1)}`;
  const regX = /([A-Z]+[a-z]+)/g;
  return input.replace(regX, '$& ').trim();
}

