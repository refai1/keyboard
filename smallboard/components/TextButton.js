import { StyleSheet, Text, TouchableOpacity, ColorPropType } from 'react-native';

import React from 'react';

import PropTypes from 'prop-types';


export default function TextButton({ color, title, small, id, onPress }){
	return (
		<TouchableOpacity
			style={[styles.button, {borderColor: color}]}
			onPress={onPress}
		>
			<Text
				style={[
					styles.buttonText,
					small ? styles.small : styles.large,
					{ color },
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

TextButton.propTypes = {
 	color: ColorPropType.isRequired,
  	title: PropTypes.string.isRequired,
 	small: PropTypes.bool,
  	onPress: PropTypes.func,
};

TextButton.defaultProps = {
  	small: false,
};

const styles = StyleSheet.create({
	button: {
		marginTop: 5,
		minWidth: 10,
		height: 30,
		borderWidth: 2,
		borderRadius: 3,
	},
	small: {
		fontSize: 14,
		padding: 5
	},
	large: {
		fontSize: 16,
		padding: 20,
		margin: 10
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
});

