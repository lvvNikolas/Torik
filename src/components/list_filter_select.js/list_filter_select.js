import { useState } from 'react'
import './list_filter_select.css'

const ListFilterSelect = ({state, setState, dataList}) =>{

    const [isOpen, setIsOpen] = useState(false)

    const containerClassHandler = () => isOpen ?
    "filterSelect__content filterSelect__content--open":
    "filterSelect__content"

    const arrowClassHandler = () => isOpen ? 
    'filterSelect_arrow filterSelect_arrow--rotated':
    'filterSelect_arrow'

    const handleOpen = () =>{
        setIsOpen(p => !p)
    }
    console.log(state)
    const handleChoose = (el) =>{
        setState(p => ({...el}))
    }
    return(
        <div className="filterSelect">
            <div className="filterSelect__control" onClick={handleOpen}>
                <p className='filterSelect__title'>{state.title}</p>
                <div className={arrowClassHandler()}>➜</div>
            </div>
            <ul className={containerClassHandler()}>
                <p className='closeBtn' onClick={()=>setIsOpen(false)}>✖</p>
                {
                    dataList.map((e,i)=><li className="filterSelect__li"
                    onClick={()=>{
                        handleChoose(e)
                        setIsOpen(false)
                    }}
                    >{e.title}</li>)
                }
            </ul>
        </div>
    )
}

export default ListFilterSelect