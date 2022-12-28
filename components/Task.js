import React from 'react';
import {TouchableOpacity, Stylesheet,Text,View} from'react-native'; 

const task=(props) => {

    return ( 
        <View style={Styles.item}>
        <View style={styles.itemleft}>
        <TouchableOpacity style={style.square}></TouchableOpacity>
          <Text style={styles.itemText}>{props.text}</Text>
        </View> 
        <View style={styles.circular}></View>
        </View>
    )

};

export default task;
