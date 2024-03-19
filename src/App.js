import { BrowserRouter, Route, Router } from 'react-router-dom';

import Home from './pages/Home';
import Ods from './pages/Ods';
import Sobre from './pages/Sobre';

function App(){
  return(
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/ods' element={<Ods/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Router>
    </BrowserRouter>
  );
}

export default App;
