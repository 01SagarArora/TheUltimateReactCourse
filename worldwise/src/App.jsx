import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import HomePage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';



function App() {
  return (
    <BrowserRouter>        
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} >
         <Route path="cities" element={<p>List Of cities</p>} />
         <Route path="countries" element={<p>Countries</p>} />
         <Route path="form" element={<p>Form</p>} />
        </Route> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>    
    </BrowserRouter>
  )
}

export default App;

