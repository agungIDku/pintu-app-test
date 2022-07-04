function skippedSearch({ keyword, targetValue }) {
  const stringRegex = `.*${keyword.toLowerCase().split(' ').join('.*')}.*`
  const regexPattern = new RegExp(stringRegex)

  return regexPattern.test(targetValue.toLowerCase())
}

export default skippedSearch
