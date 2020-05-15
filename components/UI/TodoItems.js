import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const TodoItems = (props) =>{
        return(<View style={styles.taskContainer}>
            <View style={styles.inner}>
                     <Text style={[styles.textStyle,{marginRight:10}]}>{props.id}</Text>
                     <View style={styles.taskShow}>
                         <Text style={styles.textStyle}>{props.task}</Text>
                            <View style={{alignItems:'flex-end',marginVertical:5}}>
                                <TouchableOpacity onPress={()=>props.deleteItem(props.id)}>
                                <AntDesign name="delete" size={24} color="#f6b140"/>
                                </TouchableOpacity>
                            </View>
                        <Text style={styles.created}>created By:{props.time}</Text>
                     </View>                   
            </View>
    </View>)
}

const styles = StyleSheet.create({
    taskContainer:{
        margin:10,
        backgroundColor:'#FEF3BD',
        borderRadius:10
    },
    inner:{
        flexDirection:'row',
         width:'100%',padding:5     
    },taskShow:{
        width:'90%'
    },textStyle:{
        fontSize:20,
        fontWeight:'bold'
    },created:{
        fontSize:13,
        fontStyle:'italic',
        color:'grey'
    }

})

export default TodoItems