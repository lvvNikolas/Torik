import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../constants/routes';
import { placeHolderData } from "../../firebase/firebase_exampe"
import { useResize } from '../../hooks/useResize';
import './fresh_estate.css'
import FreshEstateCard from './fresh_estate_card';

const paginationHandler = (array, countPerPage) =>{
    const copy = array.map(e => e)
    const resultarr = []
    for (let i = 0; i < array.length; i += countPerPage) {
        const chunk = copy.slice(i, i + countPerPage);
        resultarr.push(chunk)
    }
    return(resultarr)
}

const estates = placeHolderData.EstatePage.Estates


const placeHolderFresh = [
    ...estates,
    ...estates, 
    ...estates, 
    ...estates, 
    ...estates
]


function FreshEstateList(props) {
    
    const data = placeHolderFresh

    const width = useResize()
    
    //Тип жилья, дома или квартиры
    const [isRentTypeHouse, setIsRentTypeHouse] = useState(false)
  
    const [paginated, setPaginated] = useState(paginationHandler(data,6))
    const [currentPage, setCurrentPage] = useState(0)
    const [chunkWidth, setChunkWidth] = useState(0)
    const [left, setLeft] = useState({
        marginLeft:0
    })

    const measuredRef = useCallback(node =>{
        if(node !== null){
            setChunkWidth(
                node.getBoundingClientRect().width
            )
        }
    },[width])

    const indicatorClassHandler = (id) =>{
        return id === currentPage ?
        "FreshEstates__paginator-indicator FreshEstates__paginator-indicator--active":
        "FreshEstates__paginator-indicator"
    }

    const prercentClassHandler = (id) =>{
        return id === currentPage ?
        "FreshEstates__paginator-percent FreshEstates__paginator-percent--active":
        "FreshEstates__paginator-percent"
    }

    const leftHandler = (id) =>{
        setCurrentPage(id)
        const isMargin = () => id <= 0 ? 0 : 25 * id
       
        setLeft({
            transform: `translateX(-${chunkWidth * id + isMargin()}px)`
        })
    }

    useEffect(()=>{
        if(width > 551 && width < 950){
            setPaginated(paginationHandler(data,4))
        }
        if(width < 550){
            setPaginated(paginationHandler(data,3))
        }
        if(width > 950){
            setPaginated(paginationHandler(data,6))
        } 
    },[width])

    return (
        <div className="FreshEstates">
            <h2 className="section__title FreshEstates__title">
                Топ жилья
                <div className='FreshEstates__header-right'>
                    <div className='FreshEstates__type-toggler' onClick={()=>{
                        setIsRentTypeHouse(p => !p)
                    }}>
                        <p style={{
                            opacity:  isRentTypeHouse ? 1 : 0.3
                        }}>Дома</p>
                        <p style={{
                            opacity:  !isRentTypeHouse ? 1 : 0.3
                        }}>Квартиры</p>
                    </div>
                    <Link to={publicRoutes.ESTATE.route}
                    className="FreshEstate__header-link active_link">Перейти в каталог</Link>
                </div>
            </h2>
            <div className="FreshEstates__container">
                <div className="FreshEstates__horizontal-content" style={left}>
                {
                    paginated.map((e,i)=>
                        <div className="FreshEstates__page-chunk"  ref = {measuredRef} key = {i}>
                            {
                                e.map((card,j)=><FreshEstateCard key={j} data = {card}/>)
                            }
                        </div>
                    )
                }
                </div>
            </div>
            <div className="FreshEstates__paginator">
                {
                    paginated.map((e,i)=>{
                        let percentage = i + 1
                        return (
                        <div 
                        className = 'FreshEstates__paginator-item'
                        onClick = {()=>{
                           leftHandler(i)
                        }}
                         >
                            <p className={prercentClassHandler(i)}>{Math.floor((percentage / paginated.length) * 100)}%</p>
                            <p className={indicatorClassHandler(i)}></p>
                         </div>)
                    })
                }
            </div>
        </div>
    )
}

export default FreshEstateList;