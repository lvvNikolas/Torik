import { doc, setDoc ,addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase_config";

// setDoc добавление с id указанным в ручную
// addDoc добавление с автогенерацией id
export const setAdsToBacklog = async (data) =>{
    try {
          //ссылка на коллекцию в базе
        const ref = collection(firestore, 'backlog')
        const result = await addDoc(ref, data)
        return{
            result:result,
            error:false,
        }
    } catch (error) {
        return{
            result:null,
            error:true
        }
    }
}