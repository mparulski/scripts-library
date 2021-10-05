import isEmptyFunction from '../src/isEmptyFunction'

describe('Empty functions test cases', () => {
  test('Should return true if it is empty function', () => {
    const testFn = function() {}

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty arrow function', () => {
    const testFn = () => {}

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty generator function', () => {
    const testFn = function* () {}

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty async function', () => {
    const testFn = async function () {}

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty async arrow function', () => {
    const testFn = async () => {}

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })
})

describe('Empty functions with comments in body test cases', () => {
  test('Should return true if it is empty function', () => {
    const testFn = function() { /* comment ... */ }

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty arrow function', () => {
    const testFn = () => { /* comment ... */ }

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })

  test('Should return true if it is empty generator function', () => {
    const testFn = function* () { /* comment ... */ }

    expect(isEmptyFunction(testFn)).toBeTruthy()
  })
})

describe('Not empty functions test cases', () => {
  test('Should return false if it is not empty function', () => {
    const testFn = function() { return void 0 }

    expect(isEmptyFunction(testFn)).toBeFalsy()
  })

  test('Should return false if it is not empty arrow function', () => {
    const testFn = () => { return void 0 }

    expect(isEmptyFunction(testFn)).toBeFalsy()
  })

  test('Should return false if it is not empty generator function', () => {
    const testFn = function* () { return void 0 }

    expect(isEmptyFunction(testFn)).toBeFalsy()
  })

  test('Should return false if it generator function has name', () => {
    const testFn = function* test() {}

    expect(isEmptyFunction(testFn)).toBeFalsy()
  })
})
