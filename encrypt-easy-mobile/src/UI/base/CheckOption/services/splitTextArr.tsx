import { DescriptionItem } from '../styled';

export const splitTextArr = (text: string | string[]) => {
  if (Array.isArray(text))
    return text.map(value => <DescriptionItem key={value}>{value}</DescriptionItem>);

  return <DescriptionItem>{text}</DescriptionItem>;
};
