import styles from 'App.module.css';
import 'assets/rootColors.css';
import Card from 'components/Card/Card';
import Title from 'components/Title/Title';
import Description from './components/Description/Description';
// import { ReactComponent as Folder } from 'assets/svgs/folder-svgrepo-com.svg';
import Folder from 'components/SvgComponent/SvgComponent';

const App = () => {
  return (
    <>
      <Description />
      <Card />
      <Title />
      <img
        className={styles.folderSvg}
        src={Folder}
        alt='folder'
        height='32'
      />
      <Folder />
    </>
  );
};

export default App;
