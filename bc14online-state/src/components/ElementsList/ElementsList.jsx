import PropTypes from 'prop-types';
import Title from './../Title/Title';

const ElementsList = ({elements}) => {
        return (
                <>
                {elements?.length
                ?(elements?.map(({id,name})=>
                {return <div key={id}><p>{name}</p></div>}))
                :(<Title title='No elelments'/>)
                }
                {/* {elements?.length?(elements?.map(({id,name})=>
                {return <div key={id}><p>{name}</p></div>})):null} */}
                </>
        );
}

export default ElementsList;

ElementsList.propTypes={
        elements:PropTypes.arrayOf(PropTypes.shape({
                id:PropTypes.string.isRequired,
                name:PropTypes.string.isRequired
        }))
}