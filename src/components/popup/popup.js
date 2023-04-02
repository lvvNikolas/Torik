import React, { useContext, useEffect, useState} from "react";
import { createPortal } from "react-dom";
import './popup.css';

export const PopupContext = React.createContext()

export const PopupProvider = ({children}) =>{

    const [popup, setPopup] = useState(false)
    const [message, setMessage] = useState('')
    const [delay, setDelay] = useState(null)

    const showPopup = (message, delay = null) =>{
        setPopup(true)
        setMessage(message)
        if(delay){
            setDelay(delay)
        }
    }
    const closePopup = () => {
        setPopup(false)
        setMessage('')
        setDelay(null)
    }
    
    return(
        <PopupContext.Provider value={{
            popup,
            message,
            showPopup,
            closePopup,
        }}>
            {
                    popup && <Popup 
                    popup = {popup}
                    message = {message}
                    closePopup = {closePopup}
                    delay = {delay}
               />
            }
            {children} 
        </PopupContext.Provider>
    )
}

const Popup = (props) => {
    const {
        popup,
        message,
        closePopup,
        delay
    } = props

    const [onShow, setOnShow] = useState(false)

    const handleClassNames = () => {
        return onShow ? "popup popup--show" : "popup"
    }

    const handleClose = () =>{
        setOnShow(false)
        setTimeout(()=>{
            closePopup()
        },500)
    }

    useEffect(()=>{
        if(popup){
            setTimeout(()=>{setOnShow(true)},0)
        }
    },[popup])

    useEffect(()=>{
        if(delay){
            setTimeout(()=>{
                handleClose()
            }, delay)
        }
    },[])

    const renderPopup = () => {
            return (
            <div className={handleClassNames()} >
                <h3>{message}</h3> 
                {
                    !delay && <p
                    onClick={handleClose}
                    >X</p>
                }
            </div>)
    }

   return createPortal(renderPopup(), document.querySelector('#popup_root'))
}



