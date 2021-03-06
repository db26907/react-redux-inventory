import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'

export default class NavBar extends React.Component {
	render() {
		const { onAddClick } = this.props
		const style = {
			paddingTop: '20px',
			paddingBottom: '20px',
		}
		return (
				<Row className="show-grid" style={style}>
					<Col md={12}>
						<Button bsStyle="primary" bsSize="small" className="pull-left" onClick={() => onAddClick()}>Add</Button>
					</Col>
				</Row>
		)
	}
}