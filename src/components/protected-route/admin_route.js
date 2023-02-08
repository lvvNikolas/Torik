import { redirect } from "react-router-dom"

export const AdminRoute = ({admin,children}) =>{
    if(!admin){
        return redirect('/')
    }
    return children
}