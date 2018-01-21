var Model = require('../model');
var assert = require('assert');

describe("Model", function() {
  var model;

  beforeEach(function() {
    model = new Model();
  });

  it("should have a name", function() {
    assert.strictEqual(model.name, "Gin71");
  });
});
