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

class App extends Component {
  state = { isOpen: false };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  render() {
    const { isOpen } = this.state;
    const { toggle } = this;
    return (
      <>
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
          <Counter toggle={toggle} title='Hide counter' />
        ) : (
          <Button onClick={toggle} title='Show counter' />
        )}
      </>
    );
  }
}

export default App;
