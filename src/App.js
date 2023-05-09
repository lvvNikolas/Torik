import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Jobs from "./pages/jobs/jobs";
import RealEstate from "./pages/realEstate/realEstate";
import Services from "./pages/services/services";
import Trucks from "./pages/trucks/trucks";
import FreshAds from "./pages/freshAds/freshAds";
import NewJobs from "./pages/newJobs/newJobs";
import NavBar from "./components/nav/nav_bar";
import { publicRoutes } from "./constants/routes";
import AdsForm from "./pages/ads_from/ads_form";
import { idGenerator } from "./utils/idgenerator/generator";
import { setAdsToCollection } from "./utils/set_ads_to_firebase/setAdsToFirebase";
// import AdsForm from './pages/ads_from/ads_form';
// TODO разобраться с ключами во всем эпп

function App() {
  const { FORM, MAIN, JOBS, ESTATE, SERVICES, TRUCKS } = publicRoutes;

  const location = useLocation();

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path={MAIN.route} element={<Home />} />
        <Route path={`${JOBS.route}/*`} element={<Jobs />} />
        <Route path={`${ESTATE.route}/*`} element={<RealEstate />} />
        <Route path={`${SERVICES.route}/*`} element={<Services />} />
        <Route path={`${TRUCKS.route}/*`} element={<Trucks />} />
        {/* <Route path='freshAds' element={<FreshAds/>}/>
              <Route path='topServices' element={<TopServices/>}/>
              <Route path='newJobs' element={<NewJobs/>}/>
              <Route path='topRealEstate' element={<TopRealEstate/>}/> */}
        <Route path={FORM.route} element={<AdsForm />} />
      </Routes>
    </div>
  );
}

export default App;

// TODO Удалить, тестовая функция для прямого добавления в бд

// function setToBase() {
//   const data = {
//     Type: "JOBS",
//     Id: idGenerator("jobs"),
//     JobTitle: "Грузчики в мувинг",
//     OwnerName: "Джошуа",
//     Category: "MOOVING",
//     CompanyName: "OREON MOVE",
//     PhoneNumber: ["+19310000000"],
//     SocialLink: [
//       {
//         type: "INST",
//         link: "wa.me//",
//       },
//       {
//         type: "TG",
//         link: "t.me//",
//       },
//     ],
//     City: "LA",
//     AdsStatus: "VIP",
//     ShortJobDescription: "short desc",
//     JobDescription: `
//       <h2>Мувинг</h2>
//       <p>1500 в день</p>
//       <ul>
//         <li>Еженедельные выплаты</li>
//         <li>Социальное страхование</li>
//         <li>График 2/2</li>
//       </ul>
//       `,
//     JobSearch: "Бизнес",
//     Date: "03.02.2023",
//     Price: "500$/день",
//     bannerId: "",
//     UserId: "",
//     EndTime: "",
//     Priorithy: "",
//     keywords: [],
//   };

//   setAdsToCollection("jobs", data);
// }
