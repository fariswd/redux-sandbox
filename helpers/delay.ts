const delay = (second: number) =>
  new Promise(resolve => setTimeout(resolve, second));

export default delay;
