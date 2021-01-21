// github repository link

//1st problem
//Calculating distance from kilometer to meter
function kilometerToMeter(distanceInKM) {
  if (distanceInKM < 0) {
    return "distance can not be negative";
  } else {
    var distanceInMeter = distanceInKM * 100;
    return distanceInMeter;
  }
}

var distance = kilometerToMeter(distanceInKM);

// 2nd Problem
// Calculating budget for accessories
function budgetCalculator(watch, phone, laptop) {
  if (isNaN(watch) || isNaN(phone) || isNaN(laptop)) {
    return "Write the number of items instead of names";
  } else {
    if (watch < 0 || phone < 0 || laptop < 0) {
      return "Please give a valid number of purchased items";
    } else {
      var priceOfWatch = watch * 50;
      var priceOfPhone = phone * 100;
      var priceOfLaptop = laptop * 500;
      var totalPrice = priceOfWatch + priceOfPhone + priceOfLaptop;
      return totalPrice;
    }
  }
}

var budget = budgetCalculator(watch, phone, laptop);

// 3rd problem
//Calculating hotel cost
function hotelCost(nights) {
  var price = 0;
  if (isNaN(nights)) {
    return "Please give a number as an input value";
  } else {
    if (nights < 0) {
      return "Please specify the number of nights properly";
    } else if (nights == 0) {
      return "Cost is 0.00";
    } else {
      if (nights <= 10) {
        price = nights * 100;
      } else if (nights <= 20) {
        var priceOfNights10 = 10 * 100;
        var priceOfRemainingNights = (nights - 10) * 80;
        price = priceOfNights10 + priceOfRemainingNights;
      } else {
        var priceOfNights10 = 10 * 100;
        var priceOfNights11To20 = 10 * 80;
        var priceOfRemainingNights = (nights - 20) * 50;
        price = priceOfNights10 + priceOfNights11To20 + priceOfRemainingNights;
      }
      return price;
    }
  }
}

var totalCost = hotelCost(nights);

// 4th problem
// Finding out the largest name
function megaFriend(arr) {
  var largestName = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (largestName.length < arr[i].length) {
      largestName = arr[i];
    }
  }
  return largestName;
}

// friends = ["salam", "Rahimullah", "Korinmullah", "Abdul", "Ali"];
var bigBuddy = megaFriend(arr);
