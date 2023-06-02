import { createContext, useState } from "react";



export const AppContext = createContext();

export const AppContextProvider = (props) =>{
    const {children} = props
    const [isLogin, setisLogin] = useState(false)
    const [infoUser, setinfoUser] = useState({})
    const [userPassword,setuserPassword] = useState('')
    const [isReloading, setisReloading] = useState(0)
return(
        <AppContext.Provider value={{isLogin, setisLogin,infoUser, setinfoUser,userPassword,setuserPassword,isReloading, setisReloading}}>

        {children}
        </AppContext.Provider>
)

}