const initialState = {
	content : '',
	open :false
}

export default (state=initialState, action) => {
	switch(action.type){
		case 'SHOW_WARNING':
			return {
				...state,
				open:action.payload
			}
		case 'UPDATE_WARNING':
				return {
					...state,
					content:action.payload
				}
		default:
			return state
	}
}