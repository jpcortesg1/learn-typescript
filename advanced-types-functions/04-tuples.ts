// Array
const prices: (number | string)[] = [1, 5, 3, 6];
prices.push(1);
prices.push('one');
// prices;

// Only can have the same values that its definition
const user: [string, number] = ['jpcortesg', 21];

// Destructuring of tuple
const [username, age] = user;

username
age
