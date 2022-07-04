import { View, Text } from 'react-native'
import { SvgCssUri } from 'react-native-svg'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { formatRupiah } from '../../../utils/textFormatter'

import styles from "./styles"

function MarketItem({ title, alias, price, percent, logo, logoColor }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerCrypto}>
        <SvgCssUri uri={logo} width={30} height={30} style={{ color: logoColor, marginRight: 8 }} />
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.titleAlias}>
            {alias}
          </Text>
        </View>
      </View>
      <View >
        <Text style={styles.title}>
          {formatRupiah(`${price}`, 'Rp')}
        </Text>
        <View style={styles.containerPercentage}>
          <MaterialCommunityIcons
            name={+percent >= 0 ? 'menu-up' : 'menu-down'}
            size={24}
            style={+percent >= 0 ? styles.trendUp : styles.trendDown}
          />
          <Text style={+percent >= 0 ? styles.trendUp : styles.trendDown}>
            {percent}%
          </Text>
        </View>
      </View>
    </View>
  )
}

export default MarketItem