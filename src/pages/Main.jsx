import '../styles/Main.css';
import Header from '../components/Header';
import Headline from '../components/Headline';
import Greeting from '../components/Greeting';
import NewsLine from '../components/NewsLine';

function Main() {

  
  return (
    <div className="Main">
      <Header />
      <Greeting />
      <div className='container'>
      <Headline />
      <NewsLine />
      </div>
    </div>
  );
}

export default Main;
