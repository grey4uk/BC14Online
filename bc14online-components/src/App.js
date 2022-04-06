import { Component } from 'react';
import Site from './components/Site/Site';
import Title from './components/Title/Title';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import ElementsList from './components/ElementsList/ElementsList';
import UserList from './db/userList.json';

// const App = () => {

//         return (
//                 <Fragment>
//                 <Site/>
//                 <Title/>
//                 </Fragment>
//         );
// }

// export default App;
class App extends Component {
  title = 'Hello friends!!!';

  render() {
    return (
      <>
        <Site />
        <Section>
          <Title />
          {/* <Title title={this.title}/> */}
          {/* <Card /> */}
          <Card source='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' />
        </Section>
        {/* <ElementsList elements={[]}/> */}
        <ElementsList elements={UserList} />
      </>
    );
  }
}

export default App;
