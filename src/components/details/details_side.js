import './details_styles.css'

const DetailsSide = ({data}) =>{

    const {OwnerName,PhoneNumber,SocialLink, Avalible} = data
    //если в поле phoneNumber будет тип не массив а просто строка, чтобы не было ошибки map
    const phone = [...PhoneNumber]
    

    return(
        <div className="detailsSide">
            <h2 className="detailsSide__name">{OwnerName}</h2>
            {
                Avalible && <p className="detailsSide__avlb-time">Доступен: {Avalible}</p>
            }
            {
                phone.map((e,i)=><a href="" className="detailsSide__phone">{e}</a>)
            }
            <div className='detailsSide__social-container'>
                {
                    SocialLink.map((e,i)=><a className="detailsSide__social" href={e.link}>{e.type}</a>)
                }
            </div>
        </div>
    )
}

export default DetailsSide