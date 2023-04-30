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

function setToBase() {
  const data = {
    Type: "ESTATES",
    Id: idGenerator("rent", "room"),
    EstatePoster:
      "https://lyapota.pro/wp-content/uploads/2021/10/townhouse-designs-sovremen-style.jpg",
    EstateTitle: "Таунхаус в новом районе в пригороде Техаса",
    EstatePhotos: [
      "https://0ba.ru/images/2021/01/06/petroglif-park1-0.jpg",
      "https://cdn.riastatic.com/photos/dom/photo/20301/2030119/203011922/203011922xg.jpg",
      "https://klike.net/uploads/posts/2020-03/1583054460_1.jpg",
    ],
    OwnerName: "Джошуа",
    Category: "Дом",
    PhoneNumber: ["+19310000000", "+19310000001"],
    SocialLink: [
      {
        type: "INST",
        link: "wa.me//",
      },
      {
        type: "TG",
        link: "t.me//",
      },
    ],
    City: "Los Angeles",
    AdsStatus: "VIP",
    ShortEstateDescription: "Таунхаус. 2 спальни. Гараж на 2 машины",
    EstateDescription: `
      <h2>Евгерния, Риелтор LA</h2>
      <p>
      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
      <ul>
        <li>Заселение и оформление за 10 минут</li>
        <li>Бассейн во дворе</li>
        <li>Спортзал на крыше</li>
        <li>Панорамный вид на город</li>
        <li>Уборка и химчистка от компании</li>
      </ul>
      `,
    Date: "31.02.2023",
    Price: "10500$/мес",
  };

  setAdsToCollection("rent", data);
}
