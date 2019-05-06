import PropTypes from 'prop-types';

import React, {
    Component
} from 'react';

class Image extends Component{
    render(){
        const img = this.props.image;
        return(
            <img src={img} alt=" "/>
        );
    }
}

Image.propTypes = {
    img : PropTypes.string
}

export default Image;