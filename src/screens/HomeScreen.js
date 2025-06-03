import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native'
import React, { useCallback, useState, useContext } from 'react'
import{ useFocusEffect } from '@react-navigation/native'
import { deletarCurso, getCursos } from '../services/CursoService'
import { AuthContext } from '../context/AuthContext'

const HomeScreen = ({ navigation }) => {
 
  const [items, setItems] = useState([])
  const { user } = useContext(AuthContext)

  const carregarCursos = async () => {
    const cursos = await getCursos(user.uid)
    setItems(cursos)
  }

  useFocusEffect(
    useCallback(() => {
      carregarCursos()
    }, [])
  )

  const confirmarExclusao = (id) => {
    Alert.alert('Confirmar', 'Deseja realmente excluir este curso?', [
      { text: 'Cancelar', style: 'cancel'},
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deletarCurso(id)
          carregarCursos()
        }
      }
    ])
  }

    /*const items = [
        { id: '1', name: "Curso de React Native", description: "Aprenda a criar apps para IOS e Android" },
        {id: '2', name: "Curso de Java e Spring Boot", description: "Construa APIs robustas com Java e Spring"},
        {id: '3', name: "Curso de AWS", description: "Domine os serviços da AWS e obtenha certificação"},
        {id: '4', name: "Curso de Python para Data Science", description: "Analise dados com Python e Pandas"}
    ]*/
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>

      <Button title='Adicionar Curso' onPress={() => navigation.navigate('CursoForm')} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('Details', {
                  itemId: item.id,
                  name: item.name,
                  description: item.description
                })}
            >
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Button
                  title="✏️"
                  onPress={() => navigation.navigate('CursoForm', { itemId: item.id })}
                  color="#0275d8"
                />
                  <Button
                  title="🗑️"
                  onPress={() => confirmarExclusao(item.id)}
                  color="#d9534f"
                />
              </View>

            </TouchableOpacity>
        )
        }
    />

    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
    itemTitle: { fontSize: 18, fontWeight: 'bold' },
    itemDescription: { fontSize: 14, color: '#555' },
    })

export default HomeScreen