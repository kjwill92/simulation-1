import React, { Component } from 'react';
import Product from './../Product/Product';
import App from './../../App'

class Dashboard extends Component {
    
    
    render(){
        
        // this.props.inv.map((item,i) => <h3 key={i}>Test</h3>)
        
        return(
            <div>
                Dashboard
                <h2>{this.props.inv}</h2>
                <Product/>
            </div>
        )
    }
}
export default Dashboard;