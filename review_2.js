const cat = {
  name: "ちゃたろう",
  age: 5,
  sex: "オス"
};

console.log(cat);

cat.owner = "だいぞう";

console.log(cat);

cat.age++;

console.log(cat);

delete cat.owner;

console.log(cat);
