describe("coinCombinations", function() {
  it("will count the number pennies", function() {
    expect(coinCombinations(4)).to.eql([[0, 0, 0, 4], [0, 0, 0, 4]]);
  });

  it("will return the number of nickels and pennies for a cents amount less than 10", function() {
    expect(coinCombinations(9)).to.eql([[0, 0, 1, 4], [0, 0, 1, 4]]);
  });

  it("will count the number of pennies, nickels, and dimes", function() {
    expect(coinCombinations(16)).to.eql([[0, 1, 1, 1], [0, 1, 1, 1]]);
  });

  it("will count the number of pennies, nickels, dimes, and quarters", function() {
    expect(coinCombinations(44)).to.eql([[1, 1, 1, 4], [0, 4, 0, 4]]);
  });

  it("will give multiple coin combinations the first having the most quarters, and the second having the most dimes", function() {
    expect(coinCombinations(44)).to.eql([[1, 1, 1, 4], [0, 4, 0, 4]]);
  });

});
