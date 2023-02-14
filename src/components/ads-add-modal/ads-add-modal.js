import { Link } from 'react-router-dom';
import routesConsts from '../../constants/routes';
import './ads-add-modal.css';

const AdsAddModal = ({modal, setModal}) =>{

    const classesHandler = () => !modal ? "adsModalContainer adsModal--hide" : "adsModalContainer"

    const modalClose = () => setModal(false)

    const {FORMS} = routesConsts

    return (
        <div className={classesHandler()} onClick = {modalClose}>
            <div className='adsModalContent' onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='adsModlaHeader'>
                    <h2>Подать объявление</h2>
                    <button onClick={modalClose}>Закрыть</button>
                </div>
               
                <div className='adsModalBody'>
                    <Link className='adsModalLink' to={FORMS.JOB.route} 
                    onClick = {modalClose}>
                        работа
                    </Link>
                    <Link className='adsModalLink'>
                        жилье
                    </Link>
                    <Link className='adsModalLink'>
                        услуги
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdsAddModal