import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdsAddModal from './components/ads-add-modal/ads-add-modal';
import NavBar from './components/nav/nav_bar';
import JobFormPage from './pages/forms/job-form-page/job_form_page';
import routesConsts from './constants/routes';

function App() {
  const [modal, setModal] = useState(false)

  const {FORMS} = routesConsts

  return (
    <div className="App">
       <NavBar setModal={setModal}/>
       <AdsAddModal modal = {modal} setModal = {setModal}/>
       <Routes>
          <Route path={FORMS.JOB.route} element ={<JobFormPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
