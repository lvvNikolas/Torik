const TrucksDetailsHeader= ({data}) =>{

    const {TrucksTitle,City,Price, Category, Date} = data

    return(
        <div className="TrucksdetailsHeader">
            <h1 className="TrucksdetailsHeader__title">{TrucksTitle}</h1>
            <p className="TrucksdetailsHeader__location">{City}</p>
            <p className="TrucksdetailsHeader__income">{Price}</p>
            <div className="TrucksdetailsHeader__date-cat">
                <p className="TrucksdetailsHeader__category">{Category}</p>
                <p className="TrucksdetailsHeader__date">Опубликована: {Date}</p>
            </div>
        </div>
    )
}

export default TrucksDetailsHeader


