import './App.css';
import { Route} from 'react-router-dom';
import LandingPage from './components/landing/Landing';
import Home from './components/home/Home';
import CardDetail from './components/Cards/CardDetail';

function App() {
  return (
        <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/countries/country/:id" component={CardDetail} />              
    </div>
   
  );
}

export default App;
