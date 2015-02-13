describe('triangle', function(){
  it("will deterine if user inputs three side lengths to be evaluated", function() {
    expect(triangle(10, 10, 15)).to.eql([10,10,15]);
  });

  it("will prompt user for input if three side lengths are not received", function() {
    expect(triangle('', '', '')).to.equal("Please enter three side lengths");
  });
});
