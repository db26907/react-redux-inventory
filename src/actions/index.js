import * as types from '../constants/ActionTypes'

export const setState = (state) => {
	return {
		type: types.SET_STATE,
		state
	}
}

export const addInventory = (inventory) => {
	return {
		type: types.INVENTORY_ADD,
		...inventory
	}
}

export const editInventory = (inventory) => {
	return {
		type: types.INVENTORY_EDIT,
		...inventory
	}
}

export const deleteInventory = (id) => {
	return {
		type: types.INVENTORY_DELETE,
		id
	}
}
