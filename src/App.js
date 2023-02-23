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
import NavBar from './components/nav/nav_bar';
import { publicRoutes } from './constants/routes';
import AdsForm from './pages/ads_from/ads_form';


function App() {

  const {FORM,MAIN,JOBS,ESTATE,SERVICES,TRUCKS} = publicRoutes

  return (
    <div className="App">
       <NavBar/>
    
       <Routes>
        <Route path={MAIN.route} element={<Home/>}/>
        <Route path={JOBS.route}  element={<Jobs/>}/>
        <Route path={ESTATE.route}  element={<RealEstate/>}/>
        <Route path={SERVICES.route}  element={<Services/>}/>
        <Route path={TRUCKS.route}  element={<Trucks/>}/>
        <Route path='freshAds' element={<FreshAds/>}/>
        <Route path='topServices' element={<TopServices/>}/>
        <Route path='newJobs' element={<NewJobs/>}/>
        <Route path='topRealEstate' element={<TopRealEstate/>}/>
        <Route path={FORM.route} element ={<AdsForm/>}/>
       </Routes>
    </div>
  );
}

export default App