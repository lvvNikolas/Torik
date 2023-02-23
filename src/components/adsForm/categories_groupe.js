const CategoriesGroupe = ({data, setData}) => {

    const classNameHandler = (isActive) => isActive ? 
    "adsForm__categories-item categories-item--active" : 
    "adsForm__categories-item"
    
    console.log(data)
    return(
        <ul className="adsForm__categories">
            {
                data.map((e,i) => (<li
                    key={i} 
                    onClick={()=>{
                        setData(prev => prev.map((e,j) => i === j ?
                        {...e, isActive:true}:
                        {...e, isActive:false}
                    ))}}
                    className={classNameHandler(e.isActive)}>{e.title}</li>))
            }
        </ul>
    )
}

export default CategoriesGroupe