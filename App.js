import React ,{useState}from 'react';
import { View, Text, Image, ScrollView,StyleSheet, TextInput, TouchableOpacity } from 'react-native';


function App() {

  const styles=StyleSheet.create({
    todoContainer:{
      flex:1,
      backgroundColor:"whitesmoke",
      margin:19,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2}
    },
    todoInput:{
      margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    width: 280,
    fontSize: 16,
    },
    deletBtn:{
      backgroundColor: "#FFA500",
      padding: 8,
      borderRadius: 20,
      width: 60,
      height: 50,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
    }},
    AddBtn:{
      backgroundColor: "blue",
      padding: 8,
      borderRadius: 20,
      width: 60,
      height: 50,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
    }},
    inputcontainer:{
      flexDirection:"row"
    },
    todotext:{
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:"green",
      flex:1
    },
    todoappHead:{
      fontSize:24,
      fontWeight:"bold",
    },
    inputitem:{
      flex:6,
      backgroundColor:"whitesmoke",
      marginTop:10
    }

  });

  const [todo,settodo] = useState("");
  const [todos,settodos] = useState("");
  const addtodos=()=>{

  }
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todotext}>
        <Text style={styles.todoappHead}>Todo APP</Text>
        </View>
      <View style={styles.inputitem}>
        
      </View>

      <View style={styles.inputcontainer}>
        <TextInput style={styles.todoInput}>
          Jawad
        </TextInput> 
        <TouchableOpacity>
        <Text style={styles.AddBtn}>ADD</Text>
        </TouchableOpacity> 
        
        </View>
      </View>
  )
}

export default App
