import './App.css';
import Navbar from './Components/Navbar';
import Reco from './Components/Reco';
import Trade from './Components/Trade';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Trade />
      <Reco />
    </div>
  );
}

export default App;
