import React,{Component} from 'react';

import Total from './Total.jsx';

class TotalUsersApi extends Component{
	constructor (){
		super();
		this.state = {
			total: 0
		}
	}

	componentDidMount(){
		console.log("hola")
        fetch('http://localhost:3000/api/users/')
        .then(rtaDB => rtaDB.json())
        .then(users => {
            this.setState( {total:users.total} );
        })
        .catch(e => console.log(e))
    }

	componentDidUpdate(){
		fetch('http://localhost:3000/api/users/')
        .then(rtaDB => rtaDB.json())
        .then(users => {
            this.setState( {total:users.total} );
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