var coinCombinations = function(cents) {
  var coinsQuarters = [];
  var coinsDimes = [];
  var combinations = [];
  var mostQuartersQuarters = 0;
  var mostQuartersDimes = 0;
  var mostQuartersNickels = 0;
  var mostQuartersPennies = 0;
  var mostDimesQuarters = 0;
  var mostDimesDimes = 0;
  var mostDimesNickels = 0;
  var mostDimesPennies = 0;

  while (cents > 0) {
    if (cents >= 25) {
      mostQuartersQuarters++;
      mostDimesDimes += 2;

      if(mostDimesNickels > 0) {
        mostDimesDimes++;
        mostDimesNickels--;
      } else {
        mostDimesNickels++;
      }

      cents -= 25;
    } else if (cents >= 10) {
      mostQuartersDimes++;
      mostDimesDimes++;
      cents -= 10;
    } else if (cents >= 5) {
      mostQuartersNickels++;

      if(mostDimesNickels > 0) {
        mostDimesDimes++;
        mostDimesNickels--;
      } else {
        mostDimesNickels++;
      }

      cents -= 5;
    } else {
      mostQuartersPennies = cents;
      mostDimesPennies = cents;
      cents = 0;
    };
  };

  coinsQuarters.push(mostQuartersQuarters, mostQuartersDimes, mostQuartersNickels, mostQuartersPennies);
  coinsDimes.push(mostDimesQuarters, mostDimesDimes, mostDimesNickels, mostDimesPennies);
  combinations.push(coinsQuarters, coinsDimes);

  return combinations;
}

$(document).ready(function() {
  $("form#coin-form").submit(function(event) {

    var cents = parseInt($("input#cents").val());

    var coinArray = coinCombinations(cents);
    var coinArrayQuarters = coinArray[0];
    var coinArrayDimes = coinArray[1];


    var quarters = coinArrayQuarters[0];
    var dimes = coinArrayQuarters[1];
    var nickels = coinArrayQuarters[2];
    var pennies = coinArrayQuarters[3];
    var quartersD = coinArrayDimes[0];
    var dimesD = coinArrayDimes[1];
    var nickelsD = coinArrayDimes[2];
    var penniesD = coinArrayDimes[3];

    var blanks = ["quarters", "dimes", "nickels", "pennies", "quartersD", "dimesD", "nickelsD", "penniesD"];


    $(".quarters").text(quarters);
    $(".dimes").text(dimes);
    $(".nickels").text(nickels);
    $(".pennies").text(pennies);
    $(".quartersD").text(quartersD);
    $(".dimesD").text(dimesD);
    $(".nickelsD").text(nickelsD);
    $(".penniesD").text(penniesD);


  event.preventDefault();

  });
});
