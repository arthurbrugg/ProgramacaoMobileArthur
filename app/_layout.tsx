import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"/> // arquivo raiz
      { /*<Tabs.Screen name="teste" options={{headerShown: false}}/>*/ } // remove titulo da pagina
      <Tabs.Screen name="feed" options={{ title: 'Feed' }} /> // uso de title em paginas
    </Tabs>
  );
}
