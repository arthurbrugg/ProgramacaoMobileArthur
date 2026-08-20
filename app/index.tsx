import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function Index() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse sua Conta</Text>
      <Text style={styles.text}>Email</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.text}>Senha</Text>
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </Pressable>
      <Button
        title="Fazer cadastro"
        onPress={() => router.navigate('/cadastro')}
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
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});