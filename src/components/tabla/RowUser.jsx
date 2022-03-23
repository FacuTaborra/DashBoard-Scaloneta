import React,{Component} from 'react';

class RowUser extends Component{
	constructor (){
		super();
		this.state = {
            rows: ""
		}
	}

	apiCall(url, consecuencia){
		fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(e => console.log(e))
	}

	componentDidMount(){
        this.setState({
            rows: <span>Cargando...</span>
        })
    }

	componentDidUpdate(){
		this.apiCall('http://localhost:3000/api/users/', this.armaFilas)
	}

    armaFilas = (data) => {
        console.log('hola' ,data)
        this.setState({
            rows: data.users.map(user => {
            return (
            <tr>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th><a href={user.detail}>Detalle</a></th>
                <th>{user.email}</th>
            </tr>)
        })})
    }

    render(){
		return(
			<tbody>
                {this.state.rows}
			</tbody>
		)
	}
	
}
export default RowUser;