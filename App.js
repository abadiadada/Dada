import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tarefas de hoje</Text>
          <View style = {styles.items}>
            {/*Aqui vão as tarefas */}
            <Task text = {'eu amo sushi '} />
            <Task text = {'Arrumar a cama'} />
            <Task text = {'Tomar café'} />
            <Task text = {'Ir para a escola'} />
            <Task text = {'Colocar comida para o cachorro'}/>
          </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{marginTop: 30},
});

