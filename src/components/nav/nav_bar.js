import { useState } from "react"
import { Link } from "react-router-dom"
import { publicRoutes } from "../../constants/routes"
import './nav_bar.css'

const NavBar = () =>{
    
    const {FORM,MAIN,JOBS,ESTATE,SERVICES,TRUCKS} = publicRoutes
    const [isOpen, setIsOpen] = useState(false)
    const [isSearch, setisSearch] = useState(false)

    const handleBurger = (close = null) =>{
        setIsOpen(p => !p)
        if(close === "close"){
            setIsOpen(false)
        }
    }

    const handleNavClass = () =>{
        return isOpen ? 
        "navBar__navigation-container navBar__menu-mobile--open":
        "navBar__navigation-container"
    }

    const searchFocusHandler = () =>{
        return isSearch ? 
        "navBar__seachBar nav__part searchFocusSize":
        "navBar__seachBar nav__part"
    }
   
    const buttonSearchHandler = () =>{
        
        return isSearch && window.innerWidth < 550 ?
        'navBar__addAds nav__part searchFocusBtnSize':
        'navBar__addAds nav__part'
    }
    const navigationSearchHandler = () =>{

    }
    

    return(
        <div className="navBar">
            <div className={"navBar__navigation nav__part"}>
                <Link className="navigation__item nav_logo"  to={MAIN.route}>TORZHOK</Link>
                <button type="button" className="navBar__burger"
                onClick={handleBurger}
                >
                    <span></span>
                    <span></span>
                </button>
                <div className={handleNavClass()}>
                    <Link className="navigation__item"  to={MAIN.route} 
                    onClick = {()=>handleBurger('close')}>Главная</Link>

                    <Link className="navigation__item"  to={JOBS.route} 
                    onClick = {()=>handleBurger('close')}>Работа</Link>

                    <Link className="navigation__item"  to={ESTATE.route} 
                    onClick = {()=>handleBurger('close')}>Жилье</Link>

                    <Link className="navigation__item"  to={SERVICES.route} 
                    onClick = {()=>handleBurger('close')}>Услуги</Link>

                    <Link className="navigation__item"  to={TRUCKS.route} 
                    onClick = {()=>handleBurger('close')}>Траки</Link>
                </div> 
            </div>

            <div className="navBar__right">
                <div className={"navBar__seachBar nav__part"}>
                    <input 
                    placeholder="Поиск по сайту"
                    onFocus={()=>setisSearch(true)}
                    onBlur ={()=>setisSearch(false)}
                    />
                </div>
                <Link to={FORM.route}  className={`${buttonSearchHandler()} active_btn`}>
                    Подать объявление
                </Link>
            </div>
          
           
        </div>
    )
}

export default NavBar