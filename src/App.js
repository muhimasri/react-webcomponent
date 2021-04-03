import './App.css';
import WiredInput from './WiredInput';

function App() {
  function handleInput(e) {
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <WiredInput onChange={handleInput}></WiredInput>
    </div>
  );
}

export default App;