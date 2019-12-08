import React from 'react';

const paddingInt = (_timer) => {
	return Math.floor(_timer).toString().padStart(2, 0);
}

const useTimer = () => {
	const [nbrSec, setNbrSec] = React.useState(0)
	const start = React.useRef(new Date());
	const timer = React.useRef(new Date());
	const beginTime = React.useRef(start.current.getTime());
	const hours = React.useRef(0);
	const mins = React.useRef(0);
	const secs = React.useRef(0);

	async function Play(){
		try {
			const now = await new Date();
			const timeNow = await now.getTime();
			let diff = timeNow - beginTime.current;
			//calc day 
			const days = (((diff / 1000) / 60) / 60) / 24;
			let p = Math.floor(days);
			let r = days - p;
			//calc hours
			hours.current = r * 24;
			p = Math.floor(hours.current);
			r = hours.current - p
			//calc minutes
			mins.current = r * 60;
			p = Math.floor(mins.current);
			r = mins.current - p
			//calc seconds 
			secs.current = r * 60;
			setNbrSec((Math.floor(mins.current)*60)+Math.floor(secs.current))
		}
		catch(err){
			return
		}
	}

	async function Start() {
		try{
			start.current = await new Date();
			beginTime.current = await start.current.getTime();
			timer.current = await setInterval(Play, 1000);
		}
		catch(err){
			console.log(err)
		}
	}
	
	function Stop(){
		clearInterval(timer.current);
	}

	function ResetTime(){
		Stop();
		hours.current = 0
		mins.current = 0
		secs.current = 0
		setNbrSec(0);
	}

	return [nbrSec, Start, Stop, `${paddingInt(hours.current)} : ${paddingInt(mins.current)} : ${paddingInt(secs.current)}`, ResetTime]
}

export default useTimer;