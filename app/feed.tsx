import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Button } from 'react-native';

export default function Feed() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
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
      <Button
        title="Acessar API"
        onPress={() => router.push('/api')}
        color="#007AFF"
      />
            <Button
        title="Buscar cep"
        onPress={() => router.push('/api')}
        color="#007AFF"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff',
  },
  searchInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#333',
    width: 130,
    fontSize: 12,
  },
  hero: {
    padding: 24,
    backgroundColor: '#141414',
    marginVertical: 12,
  },
  tagline: {
    color: '#d97706',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  heroText: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  heroButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#141414',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  infoText: {
    color: '#ccc',
    fontSize: 9,
    fontWeight: 'bold',
  },
  catalog: {
    backgroundColor: '#fff',
    padding: 24,
    marginTop: 12,
    minHeight: 200,
  },
  catalogTag: {
    color: '#d97706',
    fontSize: 11,
    fontWeight: 'bold',
  },
  catalogTitle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
});