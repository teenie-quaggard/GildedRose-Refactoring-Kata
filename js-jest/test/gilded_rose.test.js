const {Shop, Item} = require("../src/gilded_rose");

describe('special items in store', () => {
//   it('Aged Brie increases in Quality the older it gets', () => {

//   })

//   it('Aged Brie increases by 2 when there are 6-10 days left on its SellIn value', () => {

//   })

//   it('Aged Brie increases by 3 when there are 1-5 days left on its SellIn value', () => {

//   })

//   it('Aged Brie quality drops to zero when SellIn value is 0', () => {

//   })

//   it('conjured items degrade twice as fast as normal items', () => {

//   })

//   it('Sulfuras has a quality of 80 and does not degrade', () => {

//   })

})

describe('general rules for items in store', () => {

  it('should have a Name value that is a string', () => {
    const gildedRose = new Shop([new Item(true, 0, 0)]);
    const updateItemQuality = () => {
      gildedRose.updateQuality();
    }
    expect(updateItemQuality).toThrowError('Item Name parameter should be a string');
  })

  it('should have a SellIn value that is a number', () => {
    const gildedRose = new Shop([new Item('foo', null, 0)]);
    const updateItemQuality = () => {
      gildedRose.updateQuality();
    }
    expect(updateItemQuality).toThrowError('Item SellIn parameter should be a number');
  })

  it('should have a Quality value that is a number', () => {
    const gildedRose = new Shop([new Item('foo', 0, '')]);
    const updateItemQuality = () => {
      gildedRose.updateQuality();
    }
    expect(updateItemQuality).toThrowError('Item Quality parameter should be a whole number between 0 and 50');
  })

  it('should have a Quality value that is larger than 0', () => {
    const gildedRose = new Shop([new Item('foo', 0, -1)]);
    const updateItemQuality = () => {
      gildedRose.updateQuality();
    }
    expect(updateItemQuality).toThrowError('Item Quality parameter should be a whole number between 0 and 50');
  })

  it('quality should never be more than 50', () => {
    const gildedRose = new Shop([new Item('foo', 0, 51)]);
    const updateItemQuality = () => {
      gildedRose.updateQuality();
    }
    expect(updateItemQuality).toThrowError('Item Quality parameter should be a whole number between 0 and 50');
  })

  it('Sellin value should reduce when the updateQuality function is run', () => {
    const initialItem = { name: 'foo', sellIn: 5, quality: 20 };
    const gildedRose = new Shop([new Item('foo', 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBeLessThan(initialItem.sellIn);
  })

  it('Quality value should reduce when the updateQuality function is run', () => {
    const initialItem = { name: 'foo', sellIn: 5, quality: 20 };
    const gildedRose = new Shop([new Item('foo', 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeLessThan(initialItem.quality);
  })

  it('quality should degrade twice as fast after the sell by date', () => {
    const gildedRose = new Shop([new Item('foo', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  })

})