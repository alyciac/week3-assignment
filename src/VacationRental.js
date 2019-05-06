import Image from '../src/Image';
import Content from '../src/Content';
import React, {
    Component
} from 'react';


// neeed photo, title and payment information
class VacationRental extends Component{
    render(){
        return(
            <div key={this.props.index} className="vacation-rental">
                <Image image={this.props.image}></Image>
                <Content
                    title={this.props.title}
                    cost={this.props.cost}
                    description={this.props.description}>
                </Content>
                <button onClick={(event) => this.props.addToCart(event, this.props.index)}>Add to Cart</button>
            </div>
        );
    }
}

export default VacationRental;