import React, { Component } from 'react';
import VacationRental from './VacationRental';

class List extends Component{
    render(){
        let airbnbs =  this.props.airBnbs.map( (airBnb, index) => {
            return    (
                <VacationRental
                    key={index}
                    index={index}
                    image={airBnb.image}
                    title = {airBnb.title}
                    cost = {airBnb.payment.cost}
                    description = {airBnb.payment.description}
                    addToCart = {this.props.addToCart}
                />)

        });

        return(
            <div className="row">
                {airbnbs}
            </div>
        )
    }
}

export default List;
