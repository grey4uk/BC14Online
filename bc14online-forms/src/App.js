import { Component } from 'react';
import styles from 'App.module.css';
import 'assets/rootColors.css';
import Card from 'components/Card/Card';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import { ReactComponent as Folder } from 'assets/svgs/folder-svgrepo-com.svg';
import svgInImg from 'assets/svgs/folder-svgrepo-com.svg';
import Counter from 'components/Counter/Counter';
import Button from 'components/Button';
import Form from 'components/Form/Form';

class App extends Component {
  state = { isOpen: false, users: [] };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  onSubmitForm = (user) =>
    this.setState((prev) => ({
      ...prev,
      users: [...prev.users, user],
    }));

  render() {
    const { isOpen, users } = this.state;
    const { toggle, onSubmitForm } = this;
    console.log('users', users);

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Description />
        <Card />
        <Title />
        <img
          className={styles.folderSvg}
          src={svgInImg}
          alt='folder'
          height='32'
        />
        <Folder style={{ height: '32px', fill: 'red' }} /> */}

        {isOpen ? (
          <Counter
            toggle={toggle}
            title='Hide counter'
            step={2}
          />
        ) : (
          <div>
            <Button onClick={toggle} title='Show counter' />
            <Form onSubmitForm={onSubmitForm} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
