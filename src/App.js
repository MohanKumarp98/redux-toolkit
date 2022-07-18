import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ChangeColor } from './component/ChangeColor';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import MovieDetail from './component/movieDetails/MovieDetail';
import PageNotFound from './component/pageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Routes>
         <Route exact path="/" element={<Home/>}/>
        <Route  path="/movie/:imdbID" element={<MovieDetail/>}/>
        <Route element={<PageNotFound/>}/>
      </Routes>
    <Footer/> */}
    <ChangeColor />
    </div>
  );
}

export default App;
