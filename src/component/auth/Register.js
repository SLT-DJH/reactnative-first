import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Content } from 'native-base'
import { CustomHeader } from '../CustomHeader'

import Regform from '../../../src/component/function/Regform';

export class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomHeader title="Register" navigation={this.props.navigation} />
                <Content style={{ paddingLeft: 60, paddingRight: 60, }}>
                    <Regform />
                </Content>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',

    }
})