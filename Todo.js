import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';




export default function App() {

const [todo, setTodo] = useState("");
const [todoList, setTodoList] = useState ([]);

const addTodo = ()=> {
setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
setTodo("");
};
const todoDelete = (id)=> {
    const updateTodo = todoList.filter((todo)=> todo.id !== id);

    setTodoList(updateTodo);
};
const renderTodos = ({item, index})=>{
    return(

        <View style={styles.list}>



    <Text style={styles.itemList} >
        {item.title}
    </Text>

    <TouchableOpacity 
    style={styles.buttonRemove} 
    onPress={()=>todoDelete(item.id)}>
        <Text style={styles.buttonText}>
            Remove
            </Text>
    </TouchableOpacity>

        </View>
    )
}
    return (
    <View style={{marginHorizontal: 17, marginTop: 12}}>
<TextInput
      style={styles.input}
      placeholder="Please add a task"
      value = {todo}
      onChangeText={(userText) => setTodo(userText)}
    />
    
<TouchableOpacity style={styles.button}
onPress={()=> addTodo()}>

<Text style={styles.buttonText}>ADD</Text>

</TouchableOpacity>


<FlatList data = {todoList} renderItem={renderTodos} />



</View>
);
}

const styles = StyleSheet.create({

input: {
  borderWidth: 2,
  borderColor: "#758694",
  borderRadius: 6,
  marginTop: 15,
  padding: 5,
  paddingHorizontal: 15,
},
button: {
  backgroundColor: "#3FA2F6",
  borderRadius: 6,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginTop: 15,
  alignItems: 'center',
},
buttonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: 'bold',
},
list: {
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#000000", 
    alignItems: "center",
    flexDirection: "row",
},
itemList: {
    fontWeight: 'bold',
    fontSize: 17,
},
buttonRemove: {
    backgroundColor: "#3FA2F6",
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginLeft: 'auto', 
  }
});


