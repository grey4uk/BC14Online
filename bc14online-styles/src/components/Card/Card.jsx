import React from 'react';
import PropTypes from 'prop-types';
import s from './Card.module.css'

class Card extends React.Component {
        isActive=false
        render() {
        const {props,isActive}=this;
        const {source}=props;
                return (
                       <div className={s.wrapper}>
                               <div className={isActive?s.backForCard:'global-styles'}>
                               <img src={source} alt='post' width='200'/>
                               <p className={s.headstyle} style={{textTransform:"uppercase"}}>Description</p>
                               </div> 
                       </div>
                );
        }
}

export default Card;

Card.propTypes={
        source: PropTypes.string
}

Card.defaultProps={source:'https://nowywilczak.pl/wp-content/uploads/2016/04/default-placeholder.png'}