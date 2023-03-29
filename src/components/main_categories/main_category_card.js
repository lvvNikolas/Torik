import { Link } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import work from '../../assets/main_card_img/work_main.png'
import serv from '../../assets/main_card_img/service_main.png'
import rent from '../../assets/main_card_img/rent_main.png'
import truck from '../../assets/main_card_img/trucks_main.png'

const MainCategoryCard = ({routeObj}) => {

    const {name, route} = routeObj

    const contentHandler = () =>{
        if(name === publicRoutes.JOBS.name){
            return{
                name: "Работа",
                img:work,
                color:'#E7F1FF',
                desc: "Вакансии напрямую от работадателя и резюме соискателей"
            }
        }
        if(name === publicRoutes.SERVICES.name){
            return{
                name: "Услуги",
                img:serv,
                color:'#F1EBD6',
                desc: "Вакансии напрямую от работадателя и резюме соискателей"
            }
        }
        if(name === publicRoutes.ESTATE.name){
            return{
                name: "Жилье",
                img:rent,
                color:'#EAECEE',
                desc: "Вакансии напрямую от работадателя и резюме соискателей"
            }
        }
        if(name === publicRoutes.TRUCKS.name){
            return{
                name: "Траки",
                img:truck,
                color:'#D4E9E7',
                desc: "Вакансии напрямую от работадателя и резюме соискателей"
            }
        }
    }

    return (
        <Link to={route} className = "MainCategory__card" style={{
            background:contentHandler().color
        }}>
            <img className = "MainCategory__img" 
            src={contentHandler().img}
            />
            <div className = "MainCategory__text">
                <h2>{contentHandler().name}</h2>
                <p>{contentHandler().desc}</p>
            </div>
        </Link>
    )
}

export default MainCategoryCard