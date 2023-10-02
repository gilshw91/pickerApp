export const formatText = (text: string) => {
  const regex = /[\d+\-\/*]+/g;
  const formattedString = text.replace(regex, '<span class="font-bold">$&</span>');

  return formattedString;
}