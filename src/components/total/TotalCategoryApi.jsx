import React,{Component} from 'react';
import Categories from '../categories/Categories.jsx';

import Total from './Total.jsx';

class TotalCategoryApi extends Component{
	constructor (){
		super();
		this.state = {
			total: 0
		}
	}

	componentDidMount(){
        fetch('http://localhost:3000/api/products/')
        .then(data => {
			return data.json()
		})
        .then(Categories => {
			console.log(Categories)
            this.setState( {total:Categories.countByCategory.length} );
			console.log(this.state)
        })
        .catch(e => console.log("No hay categorias"))
    }

    render(){
		return(
			<div>
                <Total titulo="Categorias" total={this.state.total}/>
			</div>
		)
	}
	
}
export default TotalCategoryApi;