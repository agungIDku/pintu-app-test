const data = {
  GET_PRICE_CHANGES: 'trade/price-changes',
  GET_SUPPORTED_CURRENCIES: 'wallet/supportedCurrencies'
}

const processEndpoint = (key) => {
  return `https://api.pintu.co.id/v2/${data[key]}`
}

export default processEndpoint