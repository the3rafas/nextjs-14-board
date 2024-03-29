export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function Normalize(key: string): string {
  return key
    .replaceAll(' ', '-')
    .replace(/[^A-Za-z--]+/g, '')
    .toLowerCase();
}
