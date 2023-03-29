const ServicesDetailsHeader = ({data}) =>{

    const {ServicesTitle,City,Price, Category, Date} = data

    return(
        <div className="ServicesdetailsHeader">
            <h1 className="ServicesdetailsHeader__title">{ServicesTitle}</h1>
            <p className="ServicesdetailsHeader__location">{City}</p>
            <p className="ServicesdetailsHeader__income">{Price}</p>
            <div className="ServicesdetailsHeader__date-cat">
                <p className="ServicesdetailsHeader__category">{Category}</p>
                <p className="ServicesdetailsHeader__date">Опубликована: {Date}</p>
            </div>
        </div>
    )
}

export default ServicesDetailsHeader