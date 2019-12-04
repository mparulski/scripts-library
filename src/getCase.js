import {curry} from 'ramda'

const isLiteralObject = (obj) => (Object.prototype.toString.call(obj) === '[object Object]')

export default curry((casesDefinition, defaultCase, caseKey) => {
  if (isLiteralObject(casesDefinition) && Object.prototype.hasOwnProperty.call(casesDefinition, caseKey)) {
    return casesDefinition[caseKey]
  }

  return defaultCase
})
