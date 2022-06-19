import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home'
import CountryDetail from './Component/CountryDetail';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Redux Country Tour
      </h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail/:countryname' element={<CountryDetail></CountryDetail>}></Route>
      </Routes>

    </div>
  );
}

export default App;
