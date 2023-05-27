import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getBacklog } from "../../firebase/crud/cruds";
import {
  jobsAdminInitialValues,
  jobsAdminInputsTexts,
} from "../forms/data/job-form-data";
import AdminForm from "../forms/admin-form";

const initialValues = (data) => ({
  JOBS: jobsAdminInitialValues(data),
});

const inputTexts = {
  JOBS: jobsAdminInputsTexts,
};

const collectionsData = [
  {
    id: "BACKLOG",
    collectionName: "backlog",
    isActive: false,
  },
  {
    id: "JOBS",
    collectionName: "jobs",
    isActive: false,
  },
];

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLodaing] = useState(false);
  const [data, setData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const [currentAdsIndex, setCurrentAdsIndex] = useState(0);
  const [currentAdsType, setCurrentAdsType] = useState("");
  const [collections, setCollections] = useState(collectionsData);

  const getAdsById = () => ({
    object: (data.length > 0 && data[currentAdsIndex]) || {},
    keys: (data.length > 0 && Object.keys(data[currentAdsIndex]).sort()) || [],
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  const handldeInitialValues = (type, data, index) => {
    const adsData = data[index];
    return adsData ? initialValues(adsData)[type] : null;
  };
  const handldeInputTexts = (type) =>
    type.length > 0 ? inputTexts[type] : null;

  useEffect(() => {
    setIsRefresh(true);
  }, []);

  useEffect(() => {
    const init = async () => {
      setLodaing(true);
      try {
        const data = await getBacklog();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setLodaing(false);
    };
    if (isRefresh) {
      init();
    }
  }, [isRefresh]);

  const handleCollectionName = () =>
    collections.find((e) => e.isActive).collectionName;

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h2>Объявления в бэклогах</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            flexGrow: 2,
          }}
        >
          {data.map((ads, i) => (
            <div
              style={{
                padding: "15px",
                background: i === currentAdsIndex ? "#B4D3FF" : "#c9c9c9",
              }}
              onClick={() => {
                setCurrentAdsType(ads.type);
                setCurrentAdsIndex(i);
                setCollections((prev) =>
                  prev.map((e, j) => ({
                    ...e,
                    isActive: ads.type === e.id,
                  }))
                );
              }}
              key={i}
            >
              <h2>
                Объявление от {new Date(ads?.startTime).toLocaleDateString(0)}
              </h2>
              <div>
                <h3>Категория объявления</h3>
                <p>{ads?.type}</p>
              </div>
              <div>
                <h3>Почта</h3>
                <p>{ads?.ownerEmail}</p>
              </div>
              <div>
                <h3>Телефон</h3>
                <p>{ads?.ownerNumber}</p>
              </div>
              <div>
                <h3>Название объявления</h3>
                <p>{ads?.title}</p>
              </div>
              <div>
                <h3>Категория объявления</h3>
                <p>{ads?.plans.id}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flexGrow: 2,
          }}
        >
          <div>
            <h2>Выберите куда сохранить из бэклога</h2>
            <p>если не выбрать, то сохранится в ту которая подсвечена</p>
            <div>
              {collections.map((c, i) => (
                <div
                  style={{
                    background: c.isActive ? "#B4D3FF" : "#f8f8f8",
                  }}
                  onClick={() =>
                    setCollections((prev) =>
                      prev.map((e, j) => ({
                        ...e,
                        isActive: j === i,
                      }))
                    )
                  }
                >
                  {c.collectionName}
                </div>
              ))}
            </div>
          </div>
          <h2>{getAdsById().object["firebaseId"]}</h2>
          {data.length > 0 && currentAdsType.length > 0 && (
            <AdminForm
              initialValues={handldeInitialValues(
                currentAdsType,
                data,
                currentAdsIndex
              )}
              inputTexts={handldeInputTexts(currentAdsType)}
              collectionName={handleCollectionName()}
            />
          )}
        </div>
      </div>

      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;
