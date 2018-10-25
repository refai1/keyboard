import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import TextButton from './components/TextButton';


export default class App extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.state = {
    		entered: "",
    		lastKey: "",
    		letter_index: 0,
    		startTime: null,
    		caps: false,
    	}

    	var letter_index = 0;

    	this.handleAPress = this.handleAPress.bind(this);
    }


	onSwipeUp(gestureState) {
		const {caps} = this.state;
		this.setState({caps: true});
	}

	onSwipeDown(gestureState) {
		const {caps} = this.state;
		this.setState({caps: false});
	}
	 
	onSwipeLeft(gestureState) {
		const {entered} = this.state;
		var text = entered.slice(0,-1);
		this.setState({
			entered: text,
			letter_index: 0,
			lastKey: "",
		});
	}
	 
	onSwipeRight(gestureState) {
		const {entered} = this.state;
		var text = entered + " ";
		this.setState({
			entered: text,
			letter_index: 0,
			lastKey: "",
		});
	}

    handleAPress = string => {
    	var index;

    	const {lastKey, letter_index, entered, startTime, caps} = this.state;


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
    		if (caps){
    			text = text + string[index].toUpperCase();	
    		}else{
    			text = text + string[index]
    		}
    		
    	}else{
    		index = 0;
    		if (caps){
    			text = text + string[index].toUpperCase();	
    		}else{
    			text = text + string[index]
    		}
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


    handleClear = () => {
    	this.setState({entered: ""});
    } 


    render() {
        const {entered, caps, lastKey} = this.state;
		
		const config = {
			velocityThreshold: 0.1,
			directionalOffsetThreshold: 80
		};

  
        return (
	        <View style={styles.container}>

	            <View style={styles.topBar}></View>

	            <View style={styles.titleContainer}>
	                <Text style={styles.title}>smallboard</Text>
	            </View>
	            
	            <View style={styles.container2}>
	                <TextButton large color='#ffffff' title='clear' onPress={this.handleClear}/>
	                <Text style={styles.enteredText}>{entered}|</Text>
	                
	                <View style={styles.keyboardContainer}>
	                    <GestureRecognizer
	            			onSwipeUp={(state) => this.onSwipeUp(state)}
							onSwipeDown={(state) => this.onSwipeDown(state)}
							onSwipeLeft={(state) => this.onSwipeLeft(state)}
							onSwipeRight={(state) => this.onSwipeRight(state)}
							config={config}
							style={{flex:1, backgroundColor:"grey", borderColor:"white"}}>
		                    <View style={styles.rowContainer}>
		                        <TextButton small color='#ffffff' title='ab' onPress={this.handleAPress.bind(this, "ab")}/>
		                        <TextButton small color='#ffffff' title='cde' onPress={this.handleAPress.bind(this,"cde")}/>
		                        <TextButton small color='#ffffff' title='fg' onPress={this.handleAPress.bind(this,"fg")}/>
		                    </View>

		                    <View style={styles.rowContainer}>
		                        <TextButton small color='#ffffff' title='hi' onPress={this.handleAPress.bind(this,"hi")}/>
		                        <TextButton small color='#ffffff' title='jkl' onPress={this.handleAPress.bind(this,"jkl")}/>
		                        <TextButton small color='#ffffff' title='mn' onPress={this.handleAPress.bind(this,"mn")}/>
		                    </View>
		                    
		                    <View style={styles.rowContainer}>
		                        <TextButton small color='#ffffff' title='op' onPress={this.handleAPress.bind(this,"op")}/>
		                        <TextButton small color='#ffffff' title='qrs' onPress={this.handleAPress.bind(this,"qrs")}/>
		                        <TextButton small color='#ffffff' title='tu' onPress={this.handleAPress.bind(this,"tu")}/>
		                    </View>
		                    
		                    <View style={styles.rowContainer}>
		                        <TextButton small color='#ffffff' title='vw' onPress={this.handleAPress.bind(this,"vw")}/>
		                        <TextButton small color='#ffffff' title='xyz' onPress={this.handleAPress.bind(this,"xyz")}/>
		                        <View style={styles.button} >
		                        	{caps ? (
		                        		<Text style={styles.cap}>CAPS</Text>
		                        	) : (
		                        		<Text style={styles.notcap}>CAPS</Text>
		                        	)}		                        	
		                        </View>
		                    </View>
		                </GestureRecognizer>
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
        justifyContent: 'space-around',
        height: 150,
        width: 150, 
    },
    rowContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    button: {
		marginVertical: 10,
	},
	cap: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	},
	notcap: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'grey',
	}

});
