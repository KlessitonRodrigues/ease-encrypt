export const randomText = () => {
  const random = Math.random().toString(16).slice(2);
  const time = new Date().getTime().toString(16);
  return (random + time).substring(0, 20);
};
