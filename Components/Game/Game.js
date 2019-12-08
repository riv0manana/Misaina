import React from 'react';
import useGamePlay from './gamePlay';
import Code from './gameAssets/code.png'
import {Grid, Col, Row, Icon, Thumbnail, Text, Button} from 'native-base';

const TimoutMsg = [
	'Very be lesy elah le :D kkkk !',
	"Tsy mahalàla menatra io ôoo!! kkk",
	"Paiso be midororo le zalah ty..",
]

const RoundCard = ({ContentImage, handleSelect, isFlipped, card}) => {
	const {contentImageLink} = ContentImage;
	return (
			<Col style={{flex:1, alignItems:"center", justifyContent:"center"}} onPress={() => handleSelect(card)} className="round-card">
				{!isFlipped && <Thumbnail source={Code}/>}
				{isFlipped && <Thumbnail  source={contentImageLink}/>}
			</Col>
	)
}

const GameContainer = props => {
	const {styles} = props;
	const [cards, handleSelect, pairs, attempt, start, Repr, StartGame, ResetGame] = useGamePlay(props)
	const [text, setText] = React.useState("")
	const switchText = () => {
		switch(pairs){
			case 0:
				setText("Find the first couple")
				break;
			case 1:
				setText("You've found the first couple")
				break;
			case 11:
				setText("One couple left!")
				break;
			case 12:
				setText('Congrats !!! Share your performance !')
				break;
			case "Out of time":
				setText(TimoutMsg[Math.floor(Math.random()*TimoutMsg.length)])
				break;
			default:
					setText(`keep going, ${pairs} found `)
		}
	}
	React.useEffect(switchText, [pairs])

	return (
		<Grid>
			<Row>
				<Col>
					<Button style={styles.Button} full onPress={() => StartGame()} >
						{start || pairs === "Out of time" ? <Text >{Repr}</Text> : <Icon type="MaterialIcons" name="play-arrow"/>}
						</Button>
				</Col>
				<Col>
					<Button style={styles.Button} full onPress={() => ResetGame()} ><Icon type="MaterialIcons" name="replay"/></Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<Text style={{textAlign:"center"}}>{`Tentative : ${attempt}`}</Text>
				</Col>
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[0]} ContentImage={{contentImageLink:cards[0].link, contentImageAlt:"Oreo Pack"}} isRight={cards[0].isRight} isFlipped={cards[0].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[1]} ContentImage={{contentImageLink:cards[1].link, contentImageAlt:"Oreo Pack"}} isRight={cards[1].isRight} isFlipped={cards[1].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[2]} ContentImage={{contentImageLink:cards[2].link, contentImageAlt:"Oreo Pack"}} isRight={cards[2].isRight} isFlipped={cards[2].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[3]} ContentImage={{contentImageLink:cards[3].link, contentImageAlt:"Oreo Pack"}} isRight={cards[3].isRight} isFlipped={cards[3].isFlipped} />
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[4]} ContentImage={{contentImageLink:cards[4].link, contentImageAlt:"Oreo Pack"}} isRight={cards[4].isRight} isFlipped={cards[4].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[5]} ContentImage={{contentImageLink:cards[5].link, contentImageAlt:"Oreo Pack"}} isRight={cards[5].isRight} isFlipped={cards[5].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[6]} ContentImage={{contentImageLink:cards[6].link, contentImageAlt:"Oreo Pack"}} isRight={cards[6].isRight} isFlipped={cards[6].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[7]} ContentImage={{contentImageLink:cards[7].link, contentImageAlt:"Oreo Pack"}} isRight={cards[7].isRight} isFlipped={cards[7].isFlipped} />
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[8]} ContentImage={{contentImageLink:cards[8].link, contentImageAlt:"Oreo Pack"}} isRight={cards[8].isRight} isFlipped={cards[8].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[9]} ContentImage={{contentImageLink:cards[9].link, contentImageAlt:"Oreo Pack"}} isRight={cards[9].isRight} isFlipped={cards[9].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[10]} ContentImage={{contentImageLink:cards[10].link, contentImageAlt:"Oreo Pack"}} isRight={cards[10].isRight} isFlipped={cards[10].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[11]} ContentImage={{contentImageLink:cards[11].link, contentImageAlt:"Oreo Pack"}} isRight={cards[11].isRight} isFlipped={cards[11].isFlipped} />
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[12]} ContentImage={{contentImageLink:cards[12].link, contentImageAlt:"Oreo Pack"}} isRight={cards[12].isRight} isFlipped={cards[12].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[13]} ContentImage={{contentImageLink:cards[13].link, contentImageAlt:"Oreo Pack"}} isRight={cards[13].isRight} isFlipped={cards[13].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[14]} ContentImage={{contentImageLink:cards[14].link, contentImageAlt:"Oreo Pack"}} isRight={cards[14].isRight} isFlipped={cards[14].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[15]} ContentImage={{contentImageLink:cards[15].link, contentImageAlt:"Oreo Pack"}} isRight={cards[15].isRight} isFlipped={cards[15].isFlipped} />
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[16]} ContentImage={{contentImageLink:cards[16].link, contentImageAlt:"Oreo Pack"}} isRight={cards[16].isRight} isFlipped={cards[16].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[17]} ContentImage={{contentImageLink:cards[17].link, contentImageAlt:"Oreo Pack"}} isRight={cards[17].isRight} isFlipped={cards[17].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[18]} ContentImage={{contentImageLink:cards[18].link, contentImageAlt:"Oreo Pack"}} isRight={cards[18].isRight} isFlipped={cards[18].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[19]} ContentImage={{contentImageLink:cards[19].link, contentImageAlt:"Oreo Pack"}} isRight={cards[19].isRight} isFlipped={cards[19].isFlipped} />
			</Row>
			<Row >
				<RoundCard {...props} handleSelect={handleSelect} card={cards[20]} ContentImage={{contentImageLink:cards[20].link, contentImageAlt:"Oreo Pack"}} isRight={cards[20].isRight} isFlipped={cards[20].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[21]} ContentImage={{contentImageLink:cards[21].link, contentImageAlt:"Oreo Pack"}} isRight={cards[21].isRight} isFlipped={cards[21].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[22]} ContentImage={{contentImageLink:cards[22].link, contentImageAlt:"Oreo Pack"}} isRight={cards[22].isRight} isFlipped={cards[22].isFlipped} />
				<RoundCard {...props} handleSelect={handleSelect} card={cards[23]} ContentImage={{contentImageLink:cards[23].link, contentImageAlt:"Oreo Pack"}} isRight={cards[23].isRight} isFlipped={cards[23].isFlipped} />
			</Row>
			<Row>
				<Col>
					<Text style={{textAlign:"center"}}>{text}</Text>
				</Col>
			</Row>
		</Grid>
	)
}

export default GameContainer