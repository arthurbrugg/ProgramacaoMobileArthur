import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './src/componentes/Contador';
import Favorito from './src/componentes/Favorito';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador/>
      <Favorito/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
