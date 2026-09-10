import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      setErro('Por favor, preencha todos os campos!');
      return;
    }

    setErro('');
    router.replace('/feed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse sua Conta</Text>

      {/* Mensagem de erro na tela */}
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

      <Text style={styles.text}>Email</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email}
        onChangeText={(text) => { setEmail(text); setErro(''); }}
        autoCapitalize="none"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput 
        placeholder="Senha" 
        style={styles.input} 
        secureTextEntry={true} 
        value={senha}
        onChangeText={(text) => { setSenha(text); setErro(''); }}
      />

      {/* Botão com sensação de clique */}
      <Pressable 
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Logar</Text>
      </Pressable>

      <Button
        title="Fazer cadastro"
        onPress={() => router.push('/cadastro')}
        color="#007AFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  errorText: {
    color: '#d32f2f',
    backgroundColor: '#ffebee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    fontWeight: '600',
    color: '#555',
    marginBottom: -8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});