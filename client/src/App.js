import './App.css';
import { Route} from 'react-router-dom';
import LandingPage from './components/landing/Landing';
import Home from './components/home/Home';

function App() {
  return (
        <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />       
    </div>
   
  );
}

export default App;
