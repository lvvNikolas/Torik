import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase_config";

// setDoc добавление с id указанным в ручную
// addDoc добавление с автогенерацией id
export const setAdsToBacklog = async (data) => {
  try {
    //ссылка на коллекцию в базе
    const ref = doc(firestore, "backlog", `${data.id}`);
    const result = await setDoc(ref, data);
    return {
      result: result,
      error: null,
    };
  } catch (error) {
    return {
      result: null,
      error: error,
    };
  }
};

export const setAdsToCollection = async (collectionName, data) => {
  try {
    const ref = doc(firestore, collectionName, `${data.id}`);
    const result = await setDoc(ref, data);
    return {
      result: result,
      error: null,
    };
  } catch (error) {
    return {
      result: null,
      error: error,
    };
  }
};
