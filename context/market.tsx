import {
  createContext,
  useReducer,
} from 'react'

const initialState = {
  keyword: ''
}

const MarketStore = createContext({
  marketState: initialState,
  marketDispatch: () => null
})

const { Provider } = MarketStore


function MarketProvider({ children }){
  const [marketState, marketDispatch] = useReducer(
    (currentState, action) => {
      switch (action.type) {
        case 'SET_KEYWORD':
          return {
            keyword: action.payload
          }
        default:
          throw new Error()
      }
    },
    initialState
  )

  return (
    <Provider value={{ marketState, marketDispatch }}>
      {children}
    </Provider>
  )
}

export { MarketStore, MarketProvider }
