import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greatings from './components/Greatings';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Greatings />} />
      </Routes>
    </div>
  );
}

export default App;
