import { View, Text, StyleSheet } from "react-native";

type SaudacaoProps = {
  nome: string;
};

export default function Saudacao(props: SaudacaoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>Olá, {props.nome}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    textAlign: "center",
  },
});