import logo from './logo.svg';
import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Component/Home'
import CountryDetail from './Component/CountryDetail';
import NoPageFound from './Component/NoPageFound';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-white py-6 bg-slate-700">
        <Link to="/">Redux Country Tour</Link>
      </h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail/:countryname' element={<CountryDetail></CountryDetail>}></Route>
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
