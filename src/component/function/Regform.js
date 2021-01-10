import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Regform extends React.Component {

    render() {
        return (
            <View style={StyleSheet.regform}>

                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.TextInput} placeholder="your email"
                />

                <TextInput style={styles.TextInput} placeholder="your password"
                    secureTextEntry={true} underlineColorAndroid={'transparent'} />

                <TouchableOpacity style={styles.Loginbutton}>
                    <Text style={styles.btntext}>SIgn up</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        paddingBottom: 20,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    Loginbutton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,

    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',

    }
});