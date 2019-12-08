import React, {useState, useRef} from 'react';
import p1 from './gameAssets/c.png';
import p2 from './gameAssets/csharp.png';
import p3 from './gameAssets/html5.png';
import p4 from './gameAssets/java.png';
import p5 from './gameAssets/javascript.png';
import p6 from './gameAssets/php.png';
import p7 from './gameAssets/python.png';
import p8 from './gameAssets/css3.png';
import p9 from './gameAssets/angular.png';
import p10 from './gameAssets/react.png';
import p11 from './gameAssets/wordpress.png';
import p12 from './gameAssets/github.png';
import useTimer from './Timer';

let _cards = [
	{id:0, link:p1},
	{id:1, link:p2},
	{id:2, link:p3},
	{id:3, link:p4},
	{id:4, link:p5},
	{id:5, link:p6},
	{id:6, link:p7},
	{id:7, link:p8},
	{id:8, link:p9},
	{id:9, link:p10},
	{id:10, link:p11},
	{id:11, link:p12}
]

const shuffle_array = () => {
	let tmp_arr = _cards.map((c) => ({...c, isFlipped:false, isRight:false}));
	function func(a,b){
		return 0.5 - Math.random();
	}
  let array_1 = tmp_arr.sort(func);
  const new_array = [...array_1, ...tmp_arr]
  return new_array.sort(func);
}

let createTiles = (_cards_lists) => _cards_lists.map((c, i) => ({...c, index:i}))
const useGamePlay = () => {
	const [start, setStart] = useState(false);
	const [pairs, setPairs] = useState(0);
	const [attempt, setAttempt] = useState(0);
	const [nbrSec, Start, Stop, Repr, ResetTime] = useTimer();
	const [tiles, setTiles] = React.useState(createTiles(shuffle_array())) // create a new cards list state with index property
	//const tmp = useRef(null);
	const [tmp, setTmp] = React.useState(null)

	/** handle flip */
	const handleSelect = async (card) => {
		if(start){
			if(card.isFlipped === false){ // do nothing if the card is already mark as Right
				flipOneCard(card.index);
				if(tmp === null){ // check no card is already selected
					setTmp(card) // assign the current card to temporary memory
				}
				else {
					setAttempt(prev => prev + 1);
					let index = tmp.index
					if(tmp.id === card.id){ //if the current card Id is equal to the tmp card Id
						MarkAsRight(card.index, index); // Mark them as right
						setPairs(p => p+1);
					}
					else{ // Flip them back
						await setTimeout(() => {
							flipOneCard(card.index);
							flipOneCard(index);
						}, 700)
					}
					setTmp(null)
				}
			}
		}
	}

	const StartGame = () => {
		if(pairs !== "Out of time"){
			setStart(true);
			Start();
		}
	}

	const ResetGame = () => {
		Stop();
		setStart(false);
		setPairs(0);
		setAttempt(0);
		setTmp(null);
		ResetTime();
		setTiles(createTiles(shuffle_array()))
	}

	/** handle flip */
	const flipOneCard = (_index) => {
		setTiles(prev =>  prev.map((c, i) => {
			return i === _index ? {...c, isFlipped:!c.isFlipped} : c;
		}));
	}
	/* Check as found */
	const MarkAsRight = (indexOne, indexTwo) => {
		setTiles(prev =>  prev.map((c, i) => {
			return i === indexOne || i === indexTwo? {...c, isFlipped:true, isRight:true} : c;
		}));
	}

	// Handle FindAll
	const FoundAll  = () => {
		if(nbrSec >= (60*10)){
			setPairs("Out of time");
			Stop()
			setStart(false);
		}
		if(pairs === 12){
			Stop()
		}
	}

	React.useEffect(FoundAll, [nbrSec, pairs])

	return [tiles, handleSelect, pairs, attempt, start, Repr, StartGame, ResetGame]
}

export default useGamePlay;