import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/nav_bar';
import {publicRoutes} from './constants/routes';
import AdsForm from './pages/ads_from/ads_form';

function App() {
  const [modal, setModal] = useState(false)

  const {FORM} = publicRoutes

  return (
    <div className="App">
       <NavBar setModal={setModal}/>
       <Routes>
          <Route path={FORM.route} element ={<AdsForm/>}/>
       </Routes>
    </div>
  );
}

export default App;
