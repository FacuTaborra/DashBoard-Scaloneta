import React,{Component} from 'react';

import Total from './Total.jsx';

class TotalProductsApi extends Component{
	constructor (){
		super();
		this.state = {
			total: 0
		}
	}

	componentDidMount(){
		console.log("hola")
        fetch('http://localhost:3000/api/products/')
        .then(rtaDB => rtaDB.json())
        .then(products => {
			console.log(products)
            this.setState( {total:products.count} );
        })
        .catch(e => console.log(e))
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