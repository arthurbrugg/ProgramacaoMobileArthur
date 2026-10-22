import { View, Text, StyleSheet } from "react-native";

type CartaoAlunoProps = {
  nome: string;
  curso: string;
  idade: number | string;
};

export default function CartaoAluno(props: CartaoAlunoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.info}>Curso: {props.curso}</Text>
      <Text style={styles.info}>Idade: {props.idade} anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8fafc",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 6,
  },
  info: {
    fontSize: 15,
    color: "#475569",
    marginTop: 2,
  },
});