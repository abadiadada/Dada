import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView,Platform,TextInput,TouchableOpacity,  StyleSheet, Text, View } from 'react-native';
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
      {/*painel para adicionar tarefa*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Escreva uma tarefa'} value={task} onChangeText={text=> setTask(text)}/>
        <TouchableOpacity onPress={()=> hanleAddTask ()}> 
        <View style={styles.addWrapper}> 
        <Text style={styles.addText}> + </Text>
        </View> 
        </TouchableOpacity> 
      </KeyboardAvoidingView>
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

