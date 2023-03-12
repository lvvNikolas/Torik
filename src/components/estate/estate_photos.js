import { useState } from "react"

const EstatePhotos = ({data}) =>{
    const {EstatePhotos,EstatePoster} = data
   
    const [current, setCurrent] = useState({
        url:EstatePoster,
        id:0
    })
    
    const [other, setOther] = useState([EstatePoster, ...EstatePhotos])

    const handleClick = (el,id) =>{
        setCurrent({
            url:el,
            id:id
        })
    }

    const classNamesHandler = (i) => {
        return  i === current.id ? 
        "EstateDetails__photos-item EstateDetails__photos-item--active":
        "EstateDetails__photos-item"
    }
    return(
        <div className="EstateDetails__photos-container">
             <img src={current.url} className="EstateDetails__photos-current"/>
            <div className="EstateDetails__photos-other">
                {
                    other.map((e,i)=>
                    <img 
                        key={i}
                        src = {e}
                        className={classNamesHandler(i)}
                        onClick={()=>handleClick(e,i)}
                    />)
                }
            </div>
        </div>
    )
}

export default EstatePhotos