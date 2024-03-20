import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Ods from './pages/ODS';
import Sobre from './pages/Sobre';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ods' element={<Ods/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
