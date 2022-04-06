function Title({title}){

        const onClick=()=>{console.log('this', this)}

        return (
                <>
                <h2>{`MY TITLE: ${title}`}</h2>
                <button type='button' onClick={onClick}>PRESS</button>
                </>
                
        );
}

export default Title;

Title.defaultProps={title:'hello'}