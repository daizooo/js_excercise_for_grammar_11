const cat = {
  name: 'たま',
  age: 5,
  sex: 'メス',
};

console.log(cat);

cat.owner = 'だいぞう';

console.log(cat);

cat.age++;

console.log(cat);

delete cat.owner;

console.log(cat);
