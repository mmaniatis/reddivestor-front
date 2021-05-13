import './App.css';
import Grid from './Grid';
import NavigationBar from './NavigationBar';
import { Switch, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Grid} />
      </Switch>
    </div>
  );
}

export default App;