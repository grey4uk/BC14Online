
const Section = (props) => {
        console.log('props :>> ', props);
        return (<div>
                {props.children}
                </div>
        );
}

export default Section;