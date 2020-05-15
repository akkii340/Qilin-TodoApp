import React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'

const Button =(props) =>{
    
        return(<TouchableOpacity style={styles.btnContainer} {...props}>
            <Text style={{color:'white'}}>Add Task</Text>
        </TouchableOpacity>)
    
}

const styles = StyleSheet.create({
    btnContainer:{
        marginTop:20,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f6b140',
        borderRadius:5

    }
})

export default Button