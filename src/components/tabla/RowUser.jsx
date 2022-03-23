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
        this.apiCall('http://localhost:3000/api/users/', this.armaFilas)
    }

	componentDidUpdate(){
		this.apiCall('http://localhost:3000/api/users/', this.armaFilas)
	}

    armaFilas = (data) => {
        console.log('hola' ,data)
        this.setState({
            rows: data.user.map(user => {
            return (
            <tr>
                <th>{user.id_user}</th>
                <th>{user.name}</th>
                <th>{user.last_name}</th>
                <th>{user.email}</th>
                <th>{user.birth_date}</th>
                <th>{user.gender}</th>
                <th>{user.tel}</th>
                <th>{user.img}</th>
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