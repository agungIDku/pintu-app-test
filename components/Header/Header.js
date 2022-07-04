import { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { MarketStore } from '../../context/market';

import styles from './styles'

function Header({ title }) {
  const [isShowText, setIsShowText] = useState(false)

  const { marketDispatch } = useContext(MarketStore)

  const handleChangeKeyword = (value) => {
    marketDispatch({
      type: 'SET_KEYWORD',
      payload: value
    })
  }

  return (
    <View style={styles.container}>
      {isShowText ? (
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeKeyword}
            placeholder="Search market"
          />
          <TouchableOpacity onPress={() => setIsShowText(false)}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.title}>
            {title}
          </Text>
          <TouchableOpacity onPress={() => setIsShowText(!isShowText)}>
            <MaterialCommunityIcons name="magnify" color="black" size={22}/>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default Header