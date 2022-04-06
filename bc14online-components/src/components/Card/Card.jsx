import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
 
        render() {
        const {props}=this;
        const {source}=props;
                return (
                       <div>
                               <img src={source} alt='post' width='200'/>
                       </div> 
                );
        }
}

export default Card;

Card.propTypes={
        source: PropTypes.string
}

Card.defaultProps={source:'https://nowywilczak.pl/wp-content/uploads/2016/04/default-placeholder.png'}