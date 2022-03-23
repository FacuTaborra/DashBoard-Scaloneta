import React,{Component} from 'react';

class RowCategory extends Component{
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
		this.apiCall('http://localhost:3000/api/products/', this.armaFilas)
	}

    armaFilas = (data) => {
        this.setState({
            rows: data.countByCategory.map(category => {
            return (
            <tr>
                <th>{category.id_category}</th>
                <th>{category.name}</th>
                <th>{category.count_products}</th>
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
export default RowCategory;