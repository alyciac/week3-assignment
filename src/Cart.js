import React, {
    Component
} from 'react';

class Cart extends Component{
    render(){

        const propertyList = this.props.selectedProperties;

        const cartTotal = propertyList.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.payment.cost;
        }, 0);

        const propertyListed = propertyList.map((property, idx) => <li key={idx}>{property.title} Price: {property.payment.cost}
            <button onClick={(event) => this.props.removeFromCart(event, idx)}>Remove from Cart</button></li>
            );

        return(
            <div className="cart">
                Your Cart
                <ul>
                    {propertyListed}
                </ul>
                Total: {cartTotal}
            </div>
        );
    }
}

export default Cart;