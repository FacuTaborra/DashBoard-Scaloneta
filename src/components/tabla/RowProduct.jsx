import React,{Component} from 'react';

class RowProduct extends Component{
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
            rows: data.products.map(product => {
            return (
            <tr>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.discount}</th>
                <th>{product.detail}</th>
                <th>{product.stock}</th>
                <th>{product.category}</th>
                <th>{product.price}</th>
                <th>{product.size}</th>
                <th><a href={product.img}>imagen</a></th>
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
export default RowProduct;