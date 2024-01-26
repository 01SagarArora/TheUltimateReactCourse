import { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Product from "./pages/Product";
import Login from "./pages/Login";
import HomePage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountriesList from './components/CountryList';

const BASE_URL = `http://localhost:9000`

function App() {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('There was an error loading data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities();  
  },[])

  return (
    <BrowserRouter>        
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} >
        <Route index element={<CityList cities={cities} isLoading={isLoading} /> } />
         <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} /> } />
         <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
         <Route path="form" element={<p>Form</p>} />
        </Route> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App;

