import React from'react'
import {Text} from 'react-native'

import Estilo from '../Estilo'

export default Comp => {
  return (
    <>
    <Text style={Estilo.FontGrande}>{Comp.a}</Text>
    <Text style={Estilo.FontGrande}>{Comp.b}</Text>
    </>
  )
}