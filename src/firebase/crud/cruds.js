import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_config";

export const getAllRentsAds = async () => {
  const response = await getDocs(collection(firestore, "rent"));
  return response.docs.map((item) => item.data());
};

export const getAllRJobsAds = async () => {
  const response = await getDocs(collection(firestore, "jobs"));
  return response.docs.map((item) => item.data());
};

export const getAllServicesAds = async () => {
  const response = await getDocs(collection(firestore, "services"));
  return response.docs.map((item) => item.data());
};


export const getAllTrucksAds = async () => {
  const response = await getDocs(collection(firestore, "trucks"));
  return response.docs.map((item) => item.data());
};
