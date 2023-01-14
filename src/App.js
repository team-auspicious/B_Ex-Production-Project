import logo from './logo.svg';
import './App.css';
import { Label } from '@heejeong/component/dist/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Label />
      </header>
    </div>
  );
}

export default App;
