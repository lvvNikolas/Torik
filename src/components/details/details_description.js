const DetailsDescription = ({description}) =>{

    const descHtml = {
        __html: description
    }
    return(
        <div className="desriptionContainer">
            <h2 className="desription__title">Описание</h2>
            <p className="descriptipn__text" dangerouslySetInnerHTML={descHtml}/>
        </div>
    )
}

export default DetailsDescription