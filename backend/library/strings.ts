export function prettify(str: string): string {
  str = `${str[0].toUpperCase()}${str.substring(1)}`;
  const regX = /([A-Z]+[a-z]+)/g;
  return str.replace(regX, '$& ').trim();
}

