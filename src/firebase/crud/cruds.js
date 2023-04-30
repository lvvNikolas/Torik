import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase_config";

export const getAllRentsAds = async () => {
  const response = await getDocs(collection(firestore, "rent"));
  return response.docs.map((item) => item.data());
};
