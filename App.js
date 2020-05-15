import React,{useState,useRef} from 'react';
import { StyleSheet,SafeAreaView, Text,View, FlatList,Keyboard } from 'react-native';
import Input from './components/UI/Input'
import Button from './components/UI/Button'
import TodoItems from './components/UI/TodoItems'


function formattime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let time = hours + ':' + minutes + ' ' + ampm;
  return time;
}

function Task(name,taskList){
  let date = new Date();
  let dateTime = date.toDateString()+" "+ formattime(date)
  return{
    id: taskList.length + 1,
    task:name,
    time:dateTime.toString()
  }
}

export default function App() {
  const[taskList,setTaskList] = useState(new Array());
  const [currInput,setCurrInput] = useState('')
  const [error,setError] = useState("");

  const Inputhandler = data =>{
    setError('')
    setCurrInput(data)
  }

  const deleteItem =(id)=>{
    const newtaskList =taskList.filter(item => {
      if(item.id != id) 
          return item
  })
  let ids = 1
  setTaskList(newtaskList.map(item =>({...item,id: ids++})))
}

  const addTaskHandler=()=>{
    if(currInput.length>0){
    const newTask = new Task(currInput,taskList)
    const arr = [...taskList,newTask]
    Keyboard.dismiss()
    setTaskList(arr)
    setCurrInput('')
  }
   else setError('Please enter a task....') 
  }

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Todo APP</Text>
    {error.length > 0 ? <Text style={{color:'tomato'}}>{error}</Text>:null}
      <Input onChangeText={Inputhandler} value={currInput}/>
        <Button onPress={addTaskHandler}/>
        <Text style={styles.yourTask}>Your Tasks</Text>
        {taskList.length>0?<FlatList
        data={taskList}
        renderItem={({ item }) => (
          <TodoItems
            id={item.id}
            task={item.task}
            time={item.time}
            deleteItem={deleteItem}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      :null}
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: '#fff',
    marginLeft:20,
    marginRight:20
  },
  taskList:{
    marginTop:20
  },
  header:{fontSize:25,
    fontWeight:'bold',
    marginBottom:10
  },
  yourTask:{
    color:'grey',
    fontWeight:'bold',
    marginTop:20,
    marginBottom:20,
    fontSize:18
  }
});
