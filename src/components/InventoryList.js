import React from 'react'

import Inventory from './Inventory'

export default class InventoryList extends React.Component {
	render() {
		const { list, onEditClick, onDeleteClick } = this.props
		const inventories = list.map(inventory => {
			return <Inventory key={inventory.id} {...inventory} onEdit={onEditClick} onDelete={onDeleteClick}></Inventory>	
		})
		return (
			<tbody>
		      {inventories}
		    </tbody>
		)
	}
}
