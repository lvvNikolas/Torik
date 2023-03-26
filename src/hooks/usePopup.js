import { useContext } from "react"
import { PopupContext } from "../components/popup/popup"

//Предоставляет доступ к функциям модального окна
//Внутри контекста доступны функции
// showPopup(message, delay) - показывает попап с переданным сообщением
//если delay указан, попап исчезнет через это время, иначе появится крестик
//для закрытия в ручную
export const usePopup = () => {
    const context = useContext(PopupContext)
    if(context === undefined){
        throw new Error('useModal must be used within a UserProvider')
    }
    return context
}
