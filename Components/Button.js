import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button = ({ onPress,children }) => {

const {buttonStyle,textStyle} = styles;

    return (
        <TouchableOpacity  onPress={onPress} style ={buttonStyle}>
            <Text style = {textStyle}>{children}</Text>
         </TouchableOpacity>
    );


};

const styles = {

    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:16,
        fontWeight:'600',
        padding:15


    },

    buttonStyle:{
        
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#ff7b18',
        borderRadius:18,
        marginLeft:5,
        marginRight:5,
        
        marginTop:10,
        elevation : 5



    }

}

export {Button};