const obj = {
  name: "André",
};

function changeName(objectToChange) {
  objectToChange.name = "filipe";
}

changeName(obj);

function newName(name) {
  return {
    name: name,
  };
}

const filipe = newName("Filipe");

// for loop (i <0...)
// for of loop (let something of [])
// for Each

const array = [
  "brittney",
  "khrystyna",
  "aleksandra",
  "jannsens",
  "tom",
  "filipe",
  "john",
  "andre",
  "ola",
  "nelli",
  "frankie",
  "luis",
  "tadej",
  "manzo",
  "gizem",
  "hugo",
];

array.forEach(function (element, idx, a) {
  console.log("ELEMENT", element, idx);
});

function forEach(exampleArray, callback) {
  for (let i = 0; i < exampleArray.length; i++) {
    callback(exampleArray[i], i, exampleArray);
  }
}

forEach(array, function (element, index, mainArr) {
  console.log("ELEMENT", element, index);
});

array.forEach(function (element, idx, a) {
  if (idx === a.length - 1) {
    console.log(element.toLowerCase());
    return true;
  }
  console.log(element.toUpperCase());
});

const arrayOfNamesCapitalized = [];
const value = array.forEach(function (name) {
  arrayOfNamesCapitalized.push(name.toUpperCase());
});

console.log(arrayOfNamesCapitalized);
console.clear();
console.log("VALUE", value);

// A NEW ARRAY METHOD: map
// map is very similar to the forEach
// forEach (Even if we write return) does not return anything
// map will always return back an array of the exact same size

const newArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

function map(exampleArray, callback) {
  const arr = [];
  for (let i = 0; i < exampleArray.length; i++) {
    const value = callback(exampleArray[i], i, exampleArray);
    arr.push(value);
  }
  return arr;
}

const upperCased = array.map(function (element) {
  return element.toUpperCase();
});
// console.log("upperCased:", upperCased);

function filter(exampleArray, callback) {
  const arr = [];
  for (let i = 0; i < exampleArray.length; i++) {
    const value = callback(exampleArray[i], i, exampleArray);
    if (value) {
      arr.push(exampleArray[i]);
    }
  }
  return arr;
}

// const filteredArr = filter(newArr, function (element) {
//   return element > 0;
// });
const filteredArr = newArr.filter(function (element) {
  return element > 0;
});

console.log("ORIGINAL", newArr);
console.log("FILTERED", filteredArr);

// function sort(exampleArray, callback) {
//    // loop
//    // const value = callback (compares two items [left, right])
//    // if value = 0; stay the same order
//    // if value < 0; left stays on left
//    // if value > 0; exchange order
// }
console.clear();
array.sort(function (value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value2 < value1) {
    return 1;
  }
  return 0;
});

// console.log(array);

// "a", "b" -> "a", "b"
// "b", "a" -> "a", "b"

const shoppingCart = [
  { name: "tshirt", price: 9.99 },
  { name: "cheese", price: 2 },
  { name: "cocaine", price: 150 },
  { name: "vynil", price: 37.5 },
];

// option1
// let totalPrice = 0;
// for (let i = 0; i < shoppingCart.length; i++) {
//   totalPrice += shoppingCart[i].price;
// }

// option2
// let totalPrice = 0;
// for (let item of shoppingCart) {
//   totalPrice += item.price;
// }

// const shoppingCart = [
//    { name: "tshirt", price: 9.99 },
//    { name: "cheese", price: 2 },
//    { name: "cocaine", price: 150 },
//    { name: "vynil", price: 37.5 }
//  ];

// first version of loop
// accumulator (9.99)
// currentValue (2)
// 9.99 + 2 -> 11.99

// second loop:
// accumulator(11.99)
// currentValue (150)
// 161.99

// third loop:
// accumulator (161.99)
// currentValue (37.5)
// 199,49

// reduce
// const totalPrice = shoppingCart.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// function reduce(exampleArray, callback, optionalArgument) {
//   let startingVal = optionalArgument || exampleArray[0];
//   for (let i = 0; i < exampleArray.length; i++) {
//     const value = callback(startingVal, exampleArray[i], i, array);
//     startingVal = value;
//   }

//   return startingVal;
// }

const totalPriceWithDiscount = shoppingCart.reduce(function (acc, val) {
  return acc + val.price;
}, "");
