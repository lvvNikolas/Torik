const EstateDetailsHeader = ({data}) =>{

    const {EstateTitle,City,Price, Category, Date} = data

    return(
        <div className="EstatedetailsHeader">
            <h1 className="EstatedetailsHeader__title">{EstateTitle}</h1>
            <p className="EstatedetailsHeader__location">{City}</p>
            <p className="EstatedetailsHeader__income">{Price}</p>
            <div className="EstatedetailsHeader__date-cat">
                <p className="EstatedetailsHeader__category">{Category}</p>
                <p className="EstatedetailsHeader__date">Опубликована: {Date}</p>
            </div>
        </div>
    )
}

export default EstateDetailsHeader