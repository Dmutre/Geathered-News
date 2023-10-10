import './styles/App.css';
import Header from './components/Header';
import Headline from './components/Headline';
//import 'dotenv/config';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Headline />
      </div>
    </div>
  );
}

export default App;
