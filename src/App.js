import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './lib/fontawesome/css/all.min.css';
import Header from './components/Header';
import WatchedList from './components/WatchedList';
import WatchList from './components/WatchList';
import AddMovie from './components/AddMovie';
import { GlobalProvider } from './context/GlobalState';
import DetailCard from './components/DetailCard';

function App() {
  return (
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<WatchList />} />
            <Route path='/watched' element={<WatchedList />} />
            <Route path='/add' element={<AddMovie />} />
            <Route path='/:title' element={<DetailCard />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
