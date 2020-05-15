import React from 'react'
import {View,TextInput,Text,Dimensions,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const Input = props =>{
    return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
    <TextInput style={styles.input} {...props}/>
        <View style={{position:'absolute'}}>
            <Feather name="edit" size={24} color="#f6b140"/>
            </View>
       </View>
    <Text style={styles.text}>"Eg. Optimize the Code"</Text>
    </View>)
}

const styles = StyleSheet.create({
    
    inputContainer:{
        marginTop:5,
        position:'relative',
        alignItems:"flex-end",
        justifyContent:'center'
    },input:{
        height:40,
        borderBottomColor:'#f6b140',
        borderBottomWidth:1, 
        width:'100%',
        textAlign:'center',
    },
    text:{
        color:'grey',
        fontSize:10
    }
})

export default Input

