import { useState } from "react"
import { CITIES } from "../../constants/cities"
import { JOB_CATEGORIES } from "../../constants/job"
import { placeHolderData } from "../../firebase/firebase_exampe"
import ListFilterSelect from "../list_filter_select.js/list_filter_select"
import ListFilterToggler from "../list_filter_toggler/list_filter_toggler"
import JobsCard from "./jobs_card"

const cities = CITIES
const jobCategories = JOB_CATEGORIES

const JobList = () => {
   
    const [{Jobs}, setData] = useState(placeHolderData.JobPage)
    const [sorting, setSorting] = useState([
        {
            title:"Вакансии",
            isActive:true
        },
        {
            title:"Резюме",
            isActive:false
        }
    ])

    const [location, setLocation] = useState({
            id:cities[0].id,
            title:cities[0].title
    })
    const [category, setCategory] = useState({
            id:jobCategories[0].id,
            title:jobCategories[0].title
    })

    const applyFilters = () =>{

    }

    return (
        <>
            <h1 className="jobsPage__title">Работа в {location.title}</h1>
            <div className='jobsPage__body'>
                <div className='jobPage__filters jobPage__column'>
                    <ListFilterSelect 
                    state={location} 
                    setState ={setLocation} 
                    dataList = {cities}/>
                    
                    <ListFilterSelect 
                    state={category} 
                    setState ={ setCategory} 
                    dataList = {jobCategories}/>

                    <button className="jobPage__filters-btn active_btn" type="button">Применить</button>

                    <ListFilterToggler 
                    state={sorting} 
                    setState ={setSorting}/>
                </div>
                <div className='jobPage__list jobPage__column'>
                    {
                        Jobs.map((e, i) => <JobsCard key = {i} data={e} />)
                    }
                </div>
                <div className='jobPage__ads jobPage__column'>
                    <div className='jobPage__ads-banner'>реклама</div>
                </div>
            </div>
        </>
    )
}

export default JobList