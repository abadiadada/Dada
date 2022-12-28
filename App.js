import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <Task text = {'eu amo sushi '} />
      <Task text = {'Arrumar a cama'} />
      <Task text = {'Tomar café'} />
      <Task text = {'Ir para a escola'} />
      <Task text = {'Colocar comida para o cachorro'}/>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01a', 
  },
});

