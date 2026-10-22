import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import Saudacao from './component/Saudacao';
import CartaoAluno from './component/CartaoAluno';

export default function Feed() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>Sonora</Text>
      </View>
      <View style={styles.hero}>
        <Text style={styles.tagline}>COLEÇÃO EM DESTAQUE</Text>
        <Text style={styles.heroTitle}>Sinta o som premium</Text>
        <Text style={styles.heroText}>
          Guitarras selecionadas com timbre impecável e acabamento profissional.
        </Text>
        <Pressable style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Ver guitarras</Text>
        </Pressable>
      </View>

      <View style={styles.infoBar}>
        <Text style={styles.infoText}>ENTREGA NACIONAL</Text>
        <Text style={styles.infoText}>GARANTIA</Text>
        <Text style={styles.infoText}>ATÉ 10X SEM JUROS</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.actionButton} onPress={() => router.push('/api')}>
          <Text style={styles.actionButtonText}>Acessar API</Text>
        </Pressable>
        <Pressable style={styles.actionButtonSecondary} onPress={() => router.push('/api')}>
          <Text style={styles.actionButtonTextSecondary}>Buscar CEP</Text>
        </Pressable>
      </View>

      <View style={styles.secaoAtividade}>
        <Text style={styles.tituloSecao}>Mural de Saudações</Text>
        <Saudacao nome="Arthur" />
        <Saudacao nome="Adrian" />
        <Saudacao nome="Matheus" />

        <Text style={styles.tituloSecao}>Cartões dos Alunos</Text>
        <CartaoAluno
          nome="Arthur"
          curso="Desenvolvimento de Sistemas"
          idade={18}
        />
        <CartaoAluno
          nome="Adrian"
          curso="Engenharia de Software"
          idade={20}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
    letterSpacing: 1,
  },
  hero: {
    padding: 24,
    backgroundColor: '#141414',
    marginVertical: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#222',
  },
  tagline: {
    color: '#d97706',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  heroText: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  heroButton: {
    backgroundColor: '#d97706',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#141414',
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#222',
  },
  infoText: {
    color: '#888',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: '#1e293b',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  actionButtonTextSecondary: {
    color: '#38bdf8',
    fontWeight: 'bold',
    fontSize: 14,
  },
  secaoAtividade: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    marginBottom: 12,
    letterSpacing: 0.5,
  },
});