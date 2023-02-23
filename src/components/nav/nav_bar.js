import { Link } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import './nav_bar.css'

const NavBar = ({setModal}) =>{
    
    const {FORM,MAIN,JOBS,ESTATE,SERVICES,TRUCKS} = publicRoutes

    return(
        <div className="navBar">
            <div className="navBar__navigation">
                <Link className="navigation__item nav_logo"  to={MAIN.route}>TORZHOK</Link>
                <Link className="navigation__item"  to={MAIN.route}>Главная</Link>
                <Link className="navigation__item"  to={JOBS.route}>Работа</Link>
                <Link className="navigation__item"  to={ESTATE.route}>Жилье</Link>
                <Link className="navigation__item"  to={SERVICES.route}>Услуги</Link>
                <Link className="navigation__item"  to={TRUCKS.route}>Траки</Link>
            </div>
            <div className="navBar__seachBar">
                <input/>
            </div>
            <div className="navBar__addAds">
                <Link to={FORM.route} className="navBarAddAds">Подать объявление</Link>
            </div>
           
        </div>
    )
}

export default NavBar