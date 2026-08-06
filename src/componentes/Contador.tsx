import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
const [contagem, setContagem] = useState(0);

return (
    <View>
    <Text>Contagem: {contagem}</Text>
    <Button title="+1" onPress={() => { if (contagem < 10) setContagem(contagem + 1); }}/>
    <Button title="-1" onPress={() => { if (contagem > 0) setContagem(contagem - 1); }}/>
    </View>
);
}