import { addDoc, collection } from 'firebase/firestore'
import { JOB_COLLECTION } from '../../../constants/collections'
import { firestore } from '../../../firebase/firebase_config'
import { data } from '../../../firebase/firebase_exampe'
import './job_form.css'

const JobFormPage = () => {

    const placeholderdata = data.JobPage
    const sendToDb = async (data) =>{
       const ref = collection(firestore, JOB_COLLECTION)
       try{
         const result = await addDoc(ref, data)
         console.log(result)
       }catch(err){
        console.log(err)
       }
    }

    return(
    <div className="JobFormContainer">
        <button onClick={()=>{
            sendToDb(placeholderdata)
        }}>Отправить на фб</button>
    </div>
    )
}

export default JobFormPage