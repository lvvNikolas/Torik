import { Link } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import './nav_bar.css'

const NavBar = ({setModal}) =>{
    const {FORM} = publicRoutes

    return(
        <div className="navBar">
            <div className="navBar__navigation">
                <Link className="navigation__item nav_logo"  to={'/'}>TORZHOK</Link>
                <Link className="navigation__item"  to={'/'}>Главная</Link>
                <Link className="navigation__item"  to={'/'}>Работа</Link>
                <Link className="navigation__item"  to={'/'}>Жилье</Link>
                <Link className="navigation__item"  to={'/'}>Услуги</Link>
                <Link className="navigation__item"  to={'/'}>Траки</Link>
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