import './fresh_ads.css'

const FreshAdsCard = ({data}) => {
    
    const {
        ServicesTitle,
        Category,
        OwnerName,
        Date
    } = data

    return(
        <div className="FreshAds__item">
            {/* <h1>{ServicesTitle}</h1>
            <h2>{Category}</h2>
            <h2>{OwnerName}</h2>
            <h2>{Date}</h2> */}
        </div>
    )
}

export default FreshAdsCard