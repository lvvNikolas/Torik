import { Link } from "react-router-dom"
import './nav_bar.css'

const NavBar = ({setModal}) =>{

    return(
        <div className="navBar">
            <button className="navBarAddAds"
            onClick={()=>{
                setModal(true)
            }}
            >Подать объявление</button>
        </div>
    )
}

export default NavBar