import curry from 'ramda.curry'

export default curry((casesDefinition, defaultCase, caseKey) => {
  return Object.prototype.hasOwnProperty.call(Object.assign({}, casesDefinition), caseKey) ? casesDefinition[caseKey] : defaultCase
})
