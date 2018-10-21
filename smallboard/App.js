import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextButton from './components/TextButton';


export default class App extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		entered: "",
    		lastKey: "",
    		letter_index: 0,
    		startTime: null,

    	}

    	var letter_index = 0;

    	this.handleAPress = this.handleAPress.bind(this);
    }

    handleAPress = string => {
    	var index;

    	const {lastKey, letter_index, entered, startTime} = this.state;

    	var text = entered;
    	var start = startTime;
    	index = letter_index;

    	var end = new Date().getTime();

    	var move_on;

    	if (end - start >= 1000){
    		// Move on to next letter
    		move_on = true;
    	} else{
    		// proceed normally.
    		move_on = false;
    	}
    	
    	if (string == lastKey && !move_on){
    		index = (letter_index + 1) % string.length;
    		text = text.slice(0,-1);
    		text = text + string[index];
    	}else{
    		index = 0;
    		text = text + string[index];
    	}
    	

    	start = new Date().getTime();
    	

        this.setState(prevState => {
            const {entered} = prevState;

            return {
                entered: text,
                lastKey: string,
                letter_index: index,
                startTime: start,
            };
        });
    };


    render() {
        const {entered} = this.state;
        
        var letters = {
    		ab : "ab"
    	}

  
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
                        <TextButton small color='#ffffff' title='ab' id="1" onPress={this.handleAPress.bind(this, "ab")}/>
                        <TextButton small color='#ffffff' title='efg' onPress={this.handleAPress.bind(this,"efg")}/>
                        <TextButton small color='#ffffff' title='kl' onPress={this.handleAPress.bind(this,"kl")}/>
                    </View>

                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='cd' onPress={this.handleAPress.bind(this,"cd")}/>
                        <TextButton small color='#ffffff' title='hij' onPress={this.handleAPress.bind(this,"hij")}/>
                        <TextButton small color='#ffffff' title='mn' onPress={this.handleAPress.bind(this,"mn")}/>
                    </View>
                    
                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='op' onPress={this.handleAPress.bind(this,"op")}/>
                        <TextButton small color='#ffffff' title='tu' onPress={this.handleAPress.bind(this,"tu")}/>
                        <TextButton small color='#ffffff' title='wx' onPress={this.handleAPress.bind(this,"wx")}/>
                    </View>
                    
                    <View style={styles.rowContainer}>
                        <TextButton small color='#ffffff' title='qrs' onPress={this.handleAPress.bind(this,"qrs")}/>
                        <TextButton small color='#ffffff' title='v' onPress={this.handleAPress.bind(this,"v")}/>
                        <TextButton small color='#ffffff' title='yz' onPress={this.handleAPress.bind(this,"yz")}/>
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
