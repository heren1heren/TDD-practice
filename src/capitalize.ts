export default function capitalize(string: string) {
  const trimString = string.trim();
  const firstChar = trimString.at(0);
  console.log(trimString);

  const newString = firstChar.toUpperCase().concat(trimString.slice(1));
  return newString;
}
