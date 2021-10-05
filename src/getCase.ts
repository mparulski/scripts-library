type CasesDefinition = {
  [key: string]: any
}

export default (casesDefinition: CasesDefinition) => (defaultCase: any) => (caseKey: string) => {
  return Object.prototype.hasOwnProperty.call(Object.assign({}, casesDefinition), caseKey) ? casesDefinition[caseKey] : defaultCase
}
