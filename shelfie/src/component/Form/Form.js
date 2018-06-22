import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            price: 0,
            imgurl: ""
        }
    this.updateName = this.updateName.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateImg = this.updateImg.bind(this)
    this.handleReset = this.handleReset.bind(this)
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }
    updatePrice(e){
        console.log(this.state.price)
        this.setState({
             price: e.target.value
        })
    }
    updateImg(e){
        this.setState({
            imgurl: e.target.value
        })
    }
    handleReset(e){
        this.setState({
            name:"",
            price: 0,
            imgurl:"",
        })
    }


    render(){
        return(
            <div>
                <input type="text" onChange={this.updateName} value={this.state.name} placeholder="name"/>
                <input type="text" onChange={this.updatePrice} value={this.state.price} placeholder="price"/>
                <input type="text" onChange={this.updateImg} value={this.state.imgurl} placeholder="img"/>
                <button onClick={this.handleReset}>Cancel</button>
                <button>Add to Inventory</button>
                <div>
                    Form
                </div>
            </div>
        )
    }
}
export default Form;