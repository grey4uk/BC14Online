import s from './Title.module.scss';

function Title({title}){

        const onClick=()=>{console.log('this', this)}

        return (
                <>
                <h2 className={s.title}>{`MY TITLE: ${title}`}</h2>
                <button type='button' onClick={onClick}>PRESS</button>
                </>
                
        );
}

export default Title;

Title.defaultProps={title:'hello'}