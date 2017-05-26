import { SET_STATE, INVENTORY_ADD, INVENTORY_EDIT, INVENTORY_DELETE } from '../constants/ActionTypes'
const initialState = [];

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_STATE:
			return action.state
		case INVENTORY_ADD:
			return [
				...state,
				{
					id: state.reduce((maxId, inventory) => Math.max(inventory.id, maxId), -1) + 1,
					category: action.category,
					name: action.name,
					price: action.price,
					stocked: true
				}
			]
		case INVENTORY_EDIT:
			return state.map((inventory) => {
				if(inventory.id === action.id) {
					return {
						id: action.id,
						category: action.category,
						name: action.name,
						price: action.price,
						stocked: true
					}
				}
				return inventory
			})
		case INVENTORY_DELETE:
			const index = state.findIndex(inventory => inventory.id === action.id);
			return [
				...state.slice(0, index),
				...state.slice(index+1)
			]
		default: 
			return state
	}
}

export default reducer;