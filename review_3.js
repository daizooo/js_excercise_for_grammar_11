const cat = {
  name: "たま",
  age: 8,
  sex: "オス"
};

console.log(cat);

cat.owner = "だいぞう";

console.log(cat);

cat.age++;

console.log(cat);

delete cat.owner;

console.log(cat);
