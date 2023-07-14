import './App.css';
import Head from './Components/Head';
import Navbar from './Components/Navbar'
import Middle from './Components/Middle';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <Middle/>
    </div>
  );
}

export default App;
