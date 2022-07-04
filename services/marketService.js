import processEndpoint from "../constants/endpoint";

export const getMarket = async () => {
  const response = await fetch(processEndpoint('GET_PRICE_CHANGES'))
  if (!response.ok) {
    throw new Error("Fetching Error");
  }

  const data = await response.json()
  
  return data.payload || []
}

export const getSupportedCurrencies = async () => {
  const response = await fetch(processEndpoint('GET_SUPPORTED_CURRENCIES'))
  if (!response.ok) {
    throw new Error("Fetching Error");
  }

  const data = await response.json()
  
  return data.payload || []
}