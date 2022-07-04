import { useMemo, useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native'
import { useQuery } from 'react-query'

import Header from '../../components/Header';
import { getMarket, getSupportedCurrencies } from '../../services/marketService';
import skippedSearch from '../../utils/skippedSearch';
import { MarketStore } from '../../context/market';

import styles from './styles';
import MarketItem from './MarketItem';

function Market() {
  const { marketState } = useContext(MarketStore)

  const { data: dataMarket = [], isLoading: isLoadingMarket } = useQuery(
    "market",
    getMarket,
    { refetchInterval: 1000 }
  )

  const { data: dataCurrencies  = [], isLoading: isLoadingCurrencies } = useQuery(
    "currencies",
    getSupportedCurrencies,
  )

  const currencies = useMemo(() => {
    const tempCurrencies = [...dataCurrencies]

    if(tempCurrencies?.[0]?.currencyGroup === 'IDR') {
      tempCurrencies.splice(0, 1)
    }

    return tempCurrencies

  }, [dataCurrencies, marketState.keyword])

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Market" />
      <ScrollView>
        {currencies.map((el, index) => {

          if(marketState.keyword && !skippedSearch({
            keyword: marketState.keyword,
            targetValue: el.name
          })) {
            return null
          }

          return (
            <MarketItem
              key={index}
              logo={el.logo}
              title={el.name}
              alias={el.currencySymbol}
              price={dataMarket?.[index]?.latestPrice || 0}
              percent={dataMarket?.[index]?.day || 0}
              logoColor={el.color}
            />
          )
        })}
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Market