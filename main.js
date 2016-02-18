//Show me how to calculate the average price of all items.
//Please console.log the average.


var total = items.reduce(function(total, current){
  // console.log('total', total.price);
  // console.log('current', current.price);
  // console.log(items.length);
  return {'price': total.price + current.price};


});


console.log(total.price / items.length);


//Show me how to get an array of items that cost between $14.00 and $18.00 USD

var midPriceItems = [];
items.forEach(function(value, index, array){
  if (array[index].price < 18 && array[index].price > 14) {
    midPriceItems.push(array[index].title);
  }
});

console.log(midPriceItems);





//Show me how find the item with a "GBP" currency code and print its name and price.
//Please console.log the one you find.


items.forEach(function(value, index, array){
  if (array[index].currency_code == 'GBP') {
    console.log(array[index].title);
  }
});






//Show me how to find which items are made of wood.
//Please console.log the ones you find.

var madeOfWood = [];

items.forEach(function(value, index, array){
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







//Show me how to find which items are made of eight or more materials.
//Please console.log the ones you find.


var lotsOfMaterials = [];
items.forEach(function(value, index, array){

  if (array[index].materials.length >= 8){
    lotsOfMaterials.push(array[index].title);
    array[index].materials.forEach(function(value, index, array){
      lotsOfMaterials.push(array[index]);
    })
  }
});

console.log(lotsOfMaterials);







//Show me how to calculate how many items were made by their sellers

var madeBySeller = 0;

items.forEach(function(value, index, array){
  if (array[index].who_made == 'i_did'){
    madeBySeller += 1;
  }
})


console.log(madeBySeller + " were made by their sellers");
