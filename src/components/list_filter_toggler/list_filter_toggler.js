import { useCallback, useRef, useState } from 'react'
import './filter_toggler.css'

const ListFilterToggler = ({state, setState}) => {

    const classHandler = (isActive) =>{
        return isActive ? "togglerItem togglerItem--active" : "togglerItem"
    }

    const [offset, setOffset] = useState({
        left:0,
        width:0
    })
    // console.log(state)

    const measuredRef = useCallback(node =>{
        if(node !== null){
            setOffset({
                left:0,
                width:node.getBoundingClientRect().width
            })
        }
    },[])

    const clickHandler = (evt, id) =>{
        const target = evt.target
        const left = target.offsetLeft
        const width = target.offsetWidth
        setOffset({left, width})
        // console.log(id)
        setState(p => p.map((el,i) => id === i ?
            {...el, isActive:true}:
            {...el, isActive:false}
        ))
    }

    const styleHandler = () => ({
        left:offset.left,
        width:offset.width
    })

    return (
        <div className='toggler'>
            {
                state.map((e,i)=>(
                <p className={classHandler(e.isActive)}
                    key = {i}
                    ref = {measuredRef}
                    onClick={(evt)=>clickHandler(evt,i)}
                >{e.title}</p>
                ))
            }
            <div className={'toggler_bg'} style={styleHandler()}></div>
        </div>
    )
}

export default ListFilterToggler