const withoutEnd = () => {
  while (true) {
    console.log('Never stop');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  const type = typeof input;
  if (type === 'string') return 'es un string';
  if (Array.isArray(input)) return 'es un array';
  fail('Dont mach');
};

example('Hola');
example([1, 6, 7, 8]);
example(2);
example('Si señor');
