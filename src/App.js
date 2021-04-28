
import './App.css';
import FormHandling from "./components/FormHandling"
import List from "./components/List"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
    <Router>
    <div>
      <nav>
            <Link to="/FormHandling">Form</Link>
            <Link to="/List">List</Link>
      </nav>

      <Switch>
        <Route path="/FormHandling">
          <FormHandling data-testid="form-area" />
        </Route>
        <Route path="/List">
          <List data-testid="list-area" />
        </Route>
        
      </Switch>
    </div>
  </Router>
  );
}


export default App;
