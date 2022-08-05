import './App.css';
import { BrowserRouter,Route} from 'react-router-dom';
import LandingPage from './components/landing/Landing';
import Home from './components/home/Home';

function App() {
  return (

    <BrowserRouter>
        <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        
    </div>
    </BrowserRouter>
   
  );
}

export default App;
