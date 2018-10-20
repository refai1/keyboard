import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextButton from './components/TextButton';



export default class App extends React.Component {
    
    state = {
        entered: "HI!",
    };


    handleAPress = () => {
        
        this.setState(prevState => {
            const {entered} = prevState;

            return {
                entered: prevState["entered"] + 'a'
            };
        });
    };


    render() {
        const {entered} = this.state;
        return (
        <View style={styles.container}>

            <View style={styles.topBar}></View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>smallboard</Text>
            </View>
            
            <View style={styles.container2}>
                
                <Text style={styles.enteredText}>{entered}</Text>
                
                <View style={styles.keyboardContainer}>
                    
                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='ab' onPress={this.handleAPress()}/>
                        <TextButton small color='#ffffff' title='efg'/>
                        <TextButton small color='#ffffff' title='kl'/>
                    </View>

                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='cd'/>
                        <TextButton small color='#ffffff' title='hij'/>
                        <TextButton small color='#ffffff' title='mn'/>
                    </View>
                    
                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='op'/>
                        <TextButton small color='#ffffff' title='tu'/>
                        <TextButton small color='#ffffff' title='wx'/>
                    </View>
                    
                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='qrs'/>
                        <TextButton small color='#ffffff' title='v'/>
                        <TextButton small color='#ffffff' title='yz'/>
                    </View>

                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    topBar: {
        height:20,
    },    
    titleContainer: {
        paddingTop: 2,
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
        backgroundColor: "white",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    enteredText: {
        fontSize: 18,
        textAlign: 'center',
    },
    keyboardContainer: {
        backgroundColor: "#9e0000",
        justifyContent: 'space-around',
        height: 150,
        width: 150, 
    },
    rowContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
});
