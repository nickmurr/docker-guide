const fibonacci = (index: number): any => {
  if (index < 2) {
    return 1;
  }
  return fibonacci(index - 1) + fibonacci(index - 2);
};

export default fibonacci;
