export const formatText = (text: string) => {
  const regex = /[\d+\-\/*]+/g;
  const formattedString = text.replace(regex, '<span class="font-bold">$&</span>');

  return formattedString;
}


export const hasEmptyValues = (obj: { [key: string]: unknown }) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value === '' || value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
        return true;
      }
    }
  }
  return false;
}

export const boldSpecificWords = (text?: string, wordsToBold?: string[]): string => {
  if (text && wordsToBold) {
    const escapedWords = wordsToBold?.map(word => word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');
    const boldedText = text.replace(pattern, '<strong>$&</strong>');
    return boldedText;
  } else {
    return ''
  }
}
