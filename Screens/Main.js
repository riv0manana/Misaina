import React from 'react'
import {connect} from 'react-redux'
import {Container, Header, Body, Footer, Text} from 'native-base'
import GameContainer from '../Components/Game/Game.js';

const Main = props => {
	const {styles} = props;
	return (
		<Container>
			<Header style={styles.Header}>
				<Body>
					<Text style={styles.TextHeader}>Misaina</Text>
				</Body>
			</Header>
			<GameContainer {...props} />
			<Footer style={styles.Footer}>
				<Text style={styles.TextFooter}>Built by riv0manana - ARTRIV</Text>
			</Footer>
		</Container>
	)
}

export default connect(({Styles}) => ({styles:Styles.Style}))(Main)