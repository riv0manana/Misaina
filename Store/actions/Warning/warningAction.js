export const setWarning = (shouldWarn, content) => dispatch => {
	if(shouldWarn){
		dispatch({	type:'UPDATE_WARNING',payload:content});
		dispatch({	type:'SHOW_WARNING',payload:true});
	}
	else {
		dispatch({	type:'SHOW_WARNING',payload:false});
		dispatch({	type:'UPDATE_WARNING',payload:''});
	}
}