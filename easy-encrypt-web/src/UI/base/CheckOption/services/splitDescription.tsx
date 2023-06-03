export const splitDescription = (text: string | string[]) => {
  if (Array.isArray(text)) return text.map(text => <div>{text}</div>);
  return <div>{text}</div>;
};
