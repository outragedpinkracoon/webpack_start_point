var Dude = require('../models/Dude');
var assert = require('assert');

describe('Dude', function () {
  var frank;

  beforeEach(function () {
    frank = new Dude();
  });

  it('should have name frank', function () {
    assert.equal(frank.name, "Frank");
  });

})