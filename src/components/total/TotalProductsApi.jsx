import React,{Component} from 'react';

import Total from './Total.jsx';

class TotalProductsApi extends Component{
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
		this.apiCall('http://localhost:3000/api/products/', this.mostarCantidad)
    }

	componentDidUpdate(){
		this.apiCall('http://localhost:3000/api/products/', this.mostarCantidad)
	}

	mostarCantidad = (products) => {
		this.setState({
			total: products.count
		})
	}

    render(){
		return(
			<div>
                <Total titulo="Productos" total={this.state.total}/>
			</div>
		)
	}
	
}
export default TotalProductsApi;