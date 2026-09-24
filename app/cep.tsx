import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function ViaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const buscarCep = () => {
    // Garante que só vai buscar se o usuário digitar os números
    const cepLimpo = cep.replace(/\D/g, ''); // Remove qualquer traço ou espaço automaticamente
    
    if (cepLimpo.length < 8) {
      setEndereco('Digite um CEP válido com 8 números');
      return;
    }

    var url = "https://viacep.com.br/ws/" + cepLimpo + "/json/";

    fetch(url)
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.erro) {
          setEndereco('CEP não encontrado');
        } else {
          setEndereco(dados.logradouro + ", " + dados.localidade + " - " + dados.uf);
        }
      })
      .catch((erro) => {
        console.log(erro);
        setEndereco('Erro de conexão com a API');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Digite o CEP (Ex: 01001000)" 
        onChangeText={setCep} 
        keyboardType="numeric" // Já abre o teclado numérico no celular
        maxLength={9} // Evita digitar números a mais
        style={styles.input}
      />
      
      <Pressable style={styles.botao} onPress={buscarCep}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </Pressable>

      <Text style={styles.texto}>{endereco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    borderWidth: 1,
    width: 250,
    padding: 8,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#ccc',
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
