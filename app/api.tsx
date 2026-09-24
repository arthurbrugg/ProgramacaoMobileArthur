import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';

export default function Api() {
    const [frase, setFrase] = useState('Relembre uma frase do Chuck')
    const buscarFrases = () => {
        var url = "https://api.chucknorris.io/jokes/random"

        fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            setFrase(dados.value)
        })
    }
  return (
    <View style={styles.container}>
    <Text style={styles.texto}>{frase}</Text>

    <Pressable style={styles.botao} onPress={buscarFrases}>
      <Text style={styles.textoBotao}>Mudar Frase</Text>
    </Pressable>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    texto: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
    botao: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });