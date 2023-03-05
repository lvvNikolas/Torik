const JobDetailsHeader = ({data}) =>{

    const {JobTitle,City,Price, Category, Date} = data

    return(
        <div className="JobdetailsHeader">
            <h1 className="JobdetailsHeader__title">{JobTitle}</h1>
            <p className="JobdetailsHeader__location">{City}</p>
            <p className="JobdetailsHeader__income">{Price}</p>
            <div className="JobdetailsHeader__date-cat">
                <p className="JobdetailsHeader__category">{Category}</p>
                <p className="JobdetailsHeader__date">Опубликована: {Date}</p>
            </div>
        </div>
    )
}

export default JobDetailsHeader