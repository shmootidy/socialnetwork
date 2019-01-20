const assert = require("chai").assert;
const importedModule = require("../analysis.js");

function functionFinder(functionName){
  for (var key in importedModule){
    return importedModule[functionName];
  }
}

describe("Social Media Analysis", function(){
  it("should ", () => {

    assert.isTrue(true);
  })
})