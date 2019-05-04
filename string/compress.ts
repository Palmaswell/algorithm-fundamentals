export const compress = (str: string): string => {
  const handleString = (comp: string, count: number, i: number): string => {
    if (i < str.length) {
      if (str[i] === str[i + 1]) {
        return handleString(comp, count+=1, i+=1);
      }
      return handleString(comp += `${count}${str[i]}`, 1, i+=1)
    }
    return comp;
  }

  return handleString('', 1, 0);
}
