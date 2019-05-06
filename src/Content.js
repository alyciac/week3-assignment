import PropTypes from 'prop-types';

import React, {
    Component
} from 'react';

class Content extends Component{
    render(){
        const title = this.props.title;
        const cost = this.props.cost;
        const description = this.props.description;
        return(
            <div className="content">
                <h3 className="title">{title}</h3>
                <div className="PaymentInfo">
                    <p>Price: {cost}</p>
                    <p>Description: {description}</p>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    title: PropTypes.string,
    cost: PropTypes.number,
    description: PropTypes.string
}

export default Content;