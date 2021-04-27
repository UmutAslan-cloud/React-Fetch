
import './App.css';
import FormHandling from "./components/FormHandling"
import List from "./components/List"
function App() {
  return (
    <div className="App">
   <FormHandling data-testid="form-area"/>
   <List data-testid="list-area"/>
    </div>
  );
}

export default App;
