import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import './lib/fontawesome/css/all.min.css';
import Header from './components/Header';
import WatchedList from './components/WatchedList';
import WatchList from './components/WatchList';
import AddMovie from './components/AddMovie';
import { GlobalProvider } from './context/GlobalState';
import DetailCard from './components/DetailCard';
import NotFound from './components/NotFound';

function App() {
  return (
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<WatchList />} />
            <Route path='/watched' element={<WatchedList />} />
            <Route path='/add' element={<AddMovie />} />
            <Route path='/movie/:title' element={<DetailCard />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
