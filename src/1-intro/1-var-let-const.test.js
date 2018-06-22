xdescribe('var let & const', function() {

  test('should understand var', function() {
    var a = 1;
    expect(a).toBe(__);
    if (a) {
      var a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });

  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(__);
    if (a) {
      let a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });

  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(__);
    if (a) {
      const a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });  
  
});