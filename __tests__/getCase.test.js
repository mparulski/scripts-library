import getCase from '../src/getCase'

describe('Test cases', () => {
  test('Should return value case as a simple value', () => {
    const simpleValue = 10
    const defaultValue = null
    const cases = {
      a: simpleValue
    }

    expect(getCase(cases, defaultValue)('a')).toEqual(cases.a)
  })
})

describe('Test default case', () => {
  test('Should return default case as a function', () => {
    const testFoo = (param) => (param)

    expect(getCase({}, testFoo)(void 0)).toEqual(testFoo)
  })

  test('Should return default case as a simple value', () => {
    const defaultCaseValue = 101

    expect(getCase({}, defaultCaseValue)(void 0)).toEqual(defaultCaseValue)
  })

  test('Should execute function passed as default case and return value', () => {
    const testFoo = (param) => (param)
    const defaultValue = 56
    const defaultCaseFunctionResult = getCase({}, testFoo, void 0)(defaultValue)

    expect(defaultCaseFunctionResult).toEqual(defaultValue)
  })

  test('Should execute getCase and return default case value', () => {
    const defaultCaseValue = 56
    const defaultCaseFunctionResult = getCase({}, defaultCaseValue, void 0)

    expect(defaultCaseFunctionResult).toEqual(defaultCaseValue)
  })

  test('Should return default case when cases are not as literal object', () => {
    expect(getCase(null, null, null)).toBeNull()
  })

  test('Should return default case if on expected case', () => {
    const simpleValue = 10
    const defaultValue = 3
    const cases = {
      a: simpleValue
    }

    expect(getCase(cases, defaultValue)('b')).toEqual(defaultValue)
  })
})
