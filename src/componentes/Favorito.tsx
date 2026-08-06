import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Favorito() {
const [favoritado, setFavoritado] = useState(false);

return (
    <View>
    <Text>{favoritado ? 'Favoritado' : 'Não favoritado'}</Text>
    <Button title="Alternar" onPress={() => setFavoritado(!favoritado)} />
    </View>
);
}