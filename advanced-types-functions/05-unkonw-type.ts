//  Any
let anyVar: any;

anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 2;
anyVar = 'Hola';
anyVar = {
  name: 'any',
};
anyVar = [1, 5, 6];

// Problem witn anyu
// Like is any type, then break a code
let isNew: boolean = anyVar;
anyVar;

let unkonwVar: unknown;

unkonwVar = true;
unkonwVar = undefined;
unkonwVar = null;
unkonwVar = 2;
unkonwVar = 'Hola';
unkonwVar = {
  name: 'any',
};
unkonwVar = [1, 5, 6];

// Obliges to verify the type first
typeof unkonwVar === 'string' && unkonwVar.toUpperCase();
unkonwVar;

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

const newJSON = parse('{"name": "Juan"}');
