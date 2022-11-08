import React,{useLayoutEffect,useState} from 'react';
import {
    SafeAreaView,ScrollView,
    StyleSheet,Image,
    Text, TextInput, View, Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import Input from '../components/Input';
import { Colors, FontSizes } from '../helper/theme';
import { BtnSolid } from '../components/Buttons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () =>
                <View style={{alignSelf:'center',marginStart:0}}>
                    <Text style={{ fontSize: FontSizes.h2, color: Colors.grey8C, fontFamily: 'OpenSans-SemiBold', alignSelf: 'center', textAlign: 'center' }}>
                        Login</Text>
                </View>,
            headerRight: () => <HeaderRightButton navigation={navigation} />,
            headerLeft: () => <HeaderLeftButton navigation={navigation} />,
        });
    }, [navigation]);

    const HeaderLeftButton = ({ navigation }) => {
        return (
            <TouchableOpacity style={{
                    backgroundColor: '#ffffff',
                    height: 40,
                    width: 40,
                    margin: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: Colors.primary1,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 3,
                    paddingLeft: 0,
                }}>
                <Ionicons name="chevron-back" size={20} color={Colors.greyA7} />
            </TouchableOpacity>
        );
    };

    const HeaderRightButton = ({ navigation }) => {
        return (
            <TouchableOpacity style={{
                backgroundColor: '#ffffff',
                height: 40,
                width: 40,
                margin: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: Colors.primary1,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 3,
                paddingLeft: 0,
            }}>
                <MaterialCommunityIcons name="headset" size={20} color={Colors.primary1} />
            </TouchableOpacity>
        );
    };
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');

    return (
        <SafeAreaView style={{flex:1,backgroundColor:Colors.background,paddingHorizontal:20}}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={{height:40}}/>
            <Input
                text="Username"
                value={Username}
                onTextchange={setUsername}
            />
            <Input
                text="Password"
                value={Password}
                onTextchange={setPassword}
                secureTextEntry = {true}
            />
            <BtnSolid text="Login" />

            <View style={{flexDirection:'row',marginTop:30,alignItems:'center',justifyContent:'center'}}>
                <View style={styles.line}/>
                <Text>OR</Text>
                <View style={styles.line}/>
            </View>
            <Text style={styles.t1}>Don't have an account?</Text>
            <Text style={styles.t2}>Create new account</Text>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    welcome:{
        marginTop:40,
        fontSize:FontSizes.t4,
        alignSelf:'center',
        color:Colors.txtBlack
    },
    line:{
        height:1.5,
        backgroundColor:Colors.primary1,
        width:'40%',
        marginHorizontal:10,
    },
    t1:{
        fontSize:FontSizes.h3,
        alignSelf:'center',
        color:Colors.txtBlack,
        marginTop:40,
    },
    t2:{
        fontSize:FontSizes.h3,
        alignSelf:'center',
        color:Colors.primary2
    }
});


export default App;
