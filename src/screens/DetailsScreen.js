import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route }) => {

  const { itemId, name, description } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Detalhes do Curso</Text>
      <text style={styles.itemTitle}>{name}</text>
      <text style={styles.itemDescription}>{description}</text>
      <text style={styles.itemId}>ID: {itemId}</text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    itemTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    itemDescription: { fontSize: 16, color: '#555', textAlign: 'center' },
    itemId: { fontSize: 14, color: '#888', marginTop: 10 },
    })

export default DetailsScreen