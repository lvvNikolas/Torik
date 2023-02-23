// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Jobs from './pages/jobs/jobs';
import RealEstate from './pages/realEstate/realEstate';
import Services from './pages/services/services';
import Trucks from './pages/trucks/trucks';
import FreshAds from './pages/freshAds/freshAds';
import TopServices from './pages/topServices/topServices';
import NewJobs from './pages/newJobs/newJobs';
import TopRealEstate from './pages/topRealEstate/topRealEstate';
// import AdsAddModal from './components/ads-add-modal/ads-add-modal';
// import NavBar from './components/nav/nav_bar';
// import JobFormPage from './pages/forms/job-form-page/job_form_page';
// import routesConsts from './constants/routes';

function App() {
  // const [modal, setModal] = useState(false)

  // const {FORMS} = routesConsts

  return (
    <div className="App">
       {/* <NavBar setModal={setModal}/>
       <AdsAddModal modal = {modal} setModal = {setModal}/> */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='jobs' element={<Jobs/>}/>
        <Route path='realEstate' element={<RealEstate/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='trucks' element={<Trucks/>}/>
        <Route path='freshAds' element={<FreshAds/>}/>
        <Route path='topServices' element={<TopServices/>}/>
        <Route path='newJobs' element={<NewJobs/>}/>
        <Route path='topRealEstate' element={<TopRealEstate/>}/>
          {/* <Route path={FORMS.JOB.route} element ={<JobFormPage/>}/> */}
       </Routes>
    </div>
  );
}

export default App