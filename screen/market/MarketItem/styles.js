import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  containerCrypto: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleAlias: {
    color: '#a1a1a1'
  },
  trendUp: {
    color: '#25a764'
  },
  trendDown: {
    color: '#e5403f'
  },
  containerPercentage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default styles