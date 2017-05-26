import React from 'react'
import { Grid } from 'react-bootstrap'
import NavBarContainer from '../containers/NavBarContainer'
import InventoryGrid from './InventoryGrid'
import AppHeader from './AppHeader'

export default class Home extends React.Component {
	render() {
		return (
			<Grid>
		        <AppHeader/>
				<NavBarContainer />
				<InventoryGrid />
			</Grid>
		)
	}
}
