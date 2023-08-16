export const randomText = () => {
  const random = Math.random().toString(32).slice(2);
  const time = new Date().getTime().toString(32);
  return (random + time).substring(0, 20);
};
