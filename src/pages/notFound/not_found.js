import { Link } from "react-router-dom"
import'./not_found.css'

const NotFound = () => (
    <div className="notFound">  
        <h1>404! Упс, страница не найдена</h1>
        <Link to={'/'}>Вернуться на главную</Link>
    </div>
)

export default NotFound