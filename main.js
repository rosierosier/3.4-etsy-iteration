//Show me how to calculate the average price of all items.
//Please console.log the average.



//reducing to find one number
var total = items.reduce(function(total, current){
  // console.log('total', total.price);
  // console.log('current', current.price);
  // console.log(items.length);
  return {'price': total.price + current.price};


});

//dividing by items.length (which is 25) to find average
console.log(total.price / items.length);



//Show me how to get an array of items that cost between $14.00 and $18.00 USD

//created var midPriceItems to log the items once they are pulled through the forEach
var midPriceItems = [];
items.forEach(function(value, index, array){
  if (array[index].price < 18 && array[index].price > 14) {
    midPriceItems.push(array[index].title);
  }
});

console.log(midPriceItems);





//Show me how find the item with a "GBP" currency code and print its name and price.
//Please console.log the one you find.

//console.logging the title of the one item that includes "GBP" in the currency code
items.forEach(function(value, index, array){
  if (array[index].currency_code == 'GBP') {
    console.log(array[index].title);
  }
});






//Show me how to find which items are made of wood.
//Please console.log the ones you find.


//using a variable again to hold the contents once they are found
var madeOfWood = [];

items.forEach(function(value, index, array){
  //using a boolean value
  var hasWood = false;
  array[index].materials.forEach(function(value, index, array){
    if (array[index] == 'wood') {
      hasWood = true;
    }
  })
    if (hasWood == true){
      madeOfWood.push(array[index].title);
    }
});

console.log(madeOfWood);


//trying an array.filter() for the sake of the assigment on this same question

// var woodObjects = [];
//
// items.filter(function(value, index, array){
//   if (array[index].materials == 'wood'){
//     return true;
//     woodObjects.push(array[index].title);
//   } else {
//     return false;
//   }
// })
//
// console.log (woodObjects);






//Show me how to find which items are made of eight or more materials.
//Please console.log the ones you find.

//another variable to hold found-contents
var lotsOfMaterials = [];
items.forEach(function(value, index, array){

  if (array[index].materials.length >= 8){
    lotsOfMaterials.push(array[index].title);
    //a second forEach loop to push materials list as well
    array[index].materials.forEach(function(value, index, array){
      lotsOfMaterials.push(array[index]);
    })
  }
});

console.log(lotsOfMaterials);


//trying an array.filter() for the sake of the assigment on this same question
var itemsWithMaterials = []
  var manyMaterials = items.filter(function(value, index, array){
    return array[index].materials.length >= 8;
    // if (array[index].materials.length >= 8){
    //   return true;
    // } else {
    //   return false;
    // }
  });

  console.log(manyMaterials);




//Show me how to calculate how many items were made by their sellers

//variable to hold number, starting at 0 so I can add 1 each time 1 is found
var madeBySeller = 0;

items.forEach(function(value, index, array){
  if (array[index].who_made == 'i_did'){
    madeBySeller += 1;
  }
})

//including phrase were made by their sellers in console.log
console.log(madeBySeller + " were made by their sellers");
