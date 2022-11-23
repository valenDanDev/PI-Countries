import './App.css';
import { Route,Switch} from 'react-router-dom';
import LandingPage from './components/landing/Landing';
import Home from './components/home/Home';
import CardDetail from './components/Cards/CardDetail';
import AddActivity from './components/activities/activity';
import NotFound404 from './components/Error404/NotFound404';

function App() {
  return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/countries/country/:id" component={CardDetail} />
            <Route exact path="/activitiesCreate" component={AddActivity} />
            <Route path="*" component={NotFound404} />   
        </Switch>           
    </div>
   
  );
}

export default App;
