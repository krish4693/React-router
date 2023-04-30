import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch.';
import { Product } from './components/Products';

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/order-summary' element={<OrderSummary/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
      <Route path='/products' element={<Product/>}/>
    </Routes>
    </>
  );
}

export default App;
