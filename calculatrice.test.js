const calc = require('./calculatrice')

test('addition of 1 + 2 should return 3', () =>{
    expect(calc(1, 2, '+')).toBe(3)
});


test('soustraction of 2 - 1 should return 1', () =>{
    expect(calc(2, 1, '-')).toBe(1)
});

test('multiplication of 2 * 3 should return 6', () =>{
    expect(calc(2, 3, '*')).toBe(6)
});

test('division of 10 / 2 should return 5', () =>{
    expect(calc(10, 2, '/')).toBe(5)
});

test('unknown operation should return null', () => {
    expect(calc(6, 3, '^')).toBeNull();
  });

  test('division by 0 should return null', () => {
    expect(calc(6, 0, '/')).toBeNull();
  });

  test('non-numeric input should return null', () => {
    expect(calc('a', 3, '+')).toBeNull();
    expect(calc(6, 'b', '+')).toBeNull();
    expect(calc('a', 'b', '+')).toBeNull();
  });