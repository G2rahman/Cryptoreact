import Searchlayout from './Components/Searchpage/Searchlayout'
import Contactlayout from './Components/Contactpage/Contactlayout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Menu from './Components/Homepage/Menu'
import Searchcoins from './Components/Searchcoins/Searchcoins'
import './App.css'
import Cardlist from './Components/Searchcoins/Cardlist';
import Searchbar from './Components/Searchcoins/Searchbar'

function App() {
  return (
    <BrowserRouter>
    <div className='Menu'>
      <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='home' element={<Menu />} />
      <Route path='*' element={<Menu />} />
      <Route path='coins' element={<Searchlayout />} />
      <Route path='search' element={<Searchcoins />} />
      <Route path='contact' element={<Contactlayout />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
