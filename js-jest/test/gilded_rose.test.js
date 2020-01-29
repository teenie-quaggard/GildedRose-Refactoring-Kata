const {Shop, Item} = require("../src/gilded_rose");

describe("initialise", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

describe('special items in store', () => {
  it('Aged Brie increases in Quality the older it gets', () => {

  })

  it('Aged Brie increases by 2 when there are 6-10 days left on its SellIn value', () => {

  })

  it('Aged Brie increases by 3 when there are 1-5 days left on its SellIn value', () => {

  })

  it('Aged Brie quality drops to zero when SellIn value is 0', () => {

  })

  it('conjured items degrade twice as fast as normal items', () => {

  })

  it('Sulfuras has a quality of 80 and does not degrade', () => {

  })

})

describe('general rules of degregation to most items in store', () => {
  it('should have a SellIn value that is a number', () => {

  })

  it('should have a Quality value that is a positive number', () => {
    
  })

  it('should lower its Sellin value when the updateQuality function is run', () => {

  })

  it('should lower its Quality value when the updateQuality function is run', () => {

  })

  it('quality should degrade twice as fast after sell by date', () => {

  })

  it('quality should never be negative and never more than 50', () => {

  })

})