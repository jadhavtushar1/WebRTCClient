import React,{useMemo,createContext, useContext} from "react";
import {io} from 'socket.io-client'


const SocketConst = createContext(null)

export const useSocket = ()=>{
    const socket = useContext(SocketConst)
    return socket
}

export const SocketProvider = ({children}) =>{
const socket = useMemo(()=>io('localhost:4000'),[])
    return(
        <SocketConst.Provider value={{socket}}>
            {children}
        </SocketConst.Provider>
    )
}

