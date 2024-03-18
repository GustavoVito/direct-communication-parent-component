import { View, StyleSheet } from 'react-native';
import Pai from './src/Direta/Pai'

export default () => (
  <>
    <View style={style.App} > 
      <Pai />
    </View>
  </>
)

const style = StyleSheet.create({
    App:{
      backgroundColor: '#AC9',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    App1:{
      backgroundColor: '#0C9',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
})
