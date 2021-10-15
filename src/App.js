import Button from './components/Button';
import List from './components/List';
import './App.css';

function App() {

  return (
    <div className="App">
      <h2>Oefening 1</h2>
      <Button text='Click me for a new picture'/>
      <h2>Oefening 2</h2>
      <h5><em>Click op de naam voor meer info</em></h5>
      <List/>
    </div>
  );
}

export default App;
