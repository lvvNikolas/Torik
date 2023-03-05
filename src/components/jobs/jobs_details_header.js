const JobDetailsHeader = ({data}) =>{

    const {JobTitle,City,Price, Category, Date} = data

    return(
        <div className="detailsHeader">
            <h1 className="detailsHeader__title">{JobTitle}</h1>
            <p className="detailsHeader__location">{City}</p>
            <p className="detailsHeader__income">{Price}</p>
            <p className="detailsHeader__category">{Category}</p>
            <p className="detailsHeader__date">Опубликована: {Date}</p>
        </div>
    )
}

export default JobDetailsHeader