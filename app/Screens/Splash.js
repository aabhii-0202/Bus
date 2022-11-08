import React, {useLayoutEffect,useEffect,useState} from 'react';

import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { Colors, FontSizes } from '../helper/theme';


const App = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{name: 'NavAuth'}],
        });
        }, 1500);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Orange Bus</Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary2,
        justifyContent: 'center',
    },
    text:{
        alignSelf:'center',
        fontSize:FontSizes.t1,
        color:Colors.white,
        marginBottom:200
    }
});


export default App;
