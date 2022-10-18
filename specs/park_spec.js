const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 60);
    dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 30);
    dinosaur4 = new Dinosaur('spinosaurus', 'carnivore', 40)
    park = new Park('Cretaceous Park', 35, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Cretaceous Park');
  });


  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });


  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3] );
  });


  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs;
    const expected = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    const expected = [dinosaur2, dinosaur3];
    assert.deepStrictEqual(actual, expected);
  });



  it('should be able to find the dinosaur that attracts the most visitors', function () {
    
    const actual = park.mostPopularDinosaur();
    const expected = dinosaur2;
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to find all dinosaurs of a particular species', function () {
    
    const actual = park.findDinosaurBySpecies('velociraptor');
    const expected = [dinosaur2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    
    const actual = park.visitorPerDay();
    const expected = 140;
    assert.strictEqual(actual, expected);
  });


  it('should be able to calculate the total number of visitors per year', function() {
    
    const actual = park.visitorPerYear();
    const expected = 140*365;
    assert.strictEqual(actual, expected);
    
  });



  it('should be able to calculate total revenue for one year', function() {

    const actual = park.revenuePerYear();
    const expected = 140*365*35;
    assert.strictEqual(actual, expected);


});

})

