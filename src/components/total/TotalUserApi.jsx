import React,{Component} from 'react';

import Total from './Total.jsx';

class TotalUsersApi extends Component{
	constructor (){
		super();
		this.state = {
			total: 0
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(e => console.log(e))
	}

	componentDidMount(){
		this.apiCall('http://localhost:3000/api/users/', this.mostarCantidad)
    }

	componentDidUpdate(){
		this.apiCall('http://localhost:3000/api/users/', this.mostarCantidad)
	}

	mostarCantidad = (users) => {
		this.setState({
			total: users.total
		})
	}

    render(){
		return(
			<div>
                <Total titulo="Usuarios" total={this.state.total}/>
			</div>
		)
	}
	
}
export default TotalUsersApi;