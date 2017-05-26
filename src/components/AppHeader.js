import React from 'react'
import logo from '../images/logo.svg';

export default class AppHeader extends React.Component {
	render() {
		
		return (

			<div className='App-header'>
				<div>
					<img src={logo} className="App-logo" alt="logo" />
				</div>	
				<div>
					<h4>Welcome to React</h4>
				</div>
			</div>
				
			)
	}
}
