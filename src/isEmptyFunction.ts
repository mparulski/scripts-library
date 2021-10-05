const fns = [
  (function(){}).toString(),
  (()=>{}).toString(),
  (function*(){}).toString()
]

export default (func: Function) => {
  const sanitized = func.toString()
    .replace(/(\/\*[^*]*\*\/)|(\/\/[^*]*)/g, '')
    .replace(/\s/g,'')

  return fns.map(fn => fn.replace(/\s/g,'')).includes(sanitized)
}
