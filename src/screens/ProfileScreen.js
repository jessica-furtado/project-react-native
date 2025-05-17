import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ( {navigation} ) => {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>👤 Meu Perfil</text>
        <Text>Nome: Jéssica Furtado</Text>
        <text>Email: jessica.furtado@gmail.com </text>
        <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  )
}

export default ProfileScreen