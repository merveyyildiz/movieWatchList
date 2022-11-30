import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './lib/fontawesome/css/all.min.css';
import Header from './components/Header';
import WatchedList from './components/WatchedList';
import WatchList from './components/WatchList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<WatchList />} />
          <Route path='/watched' element={<WatchedList />} />
          <Route path='/add' element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
