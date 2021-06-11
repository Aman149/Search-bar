import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countries from './States';

function App() {
  return (
    <div className="App">
      <div className="app-component">
      <AutoCompleteText items={countries}/>
      </div>
    </div>
  );
}

export default App;
