import './styles/App.css';
import Header from './components/Header';
import Posts from './components/Posts';
//import 'dotenv/config';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
