import React from 'react'
import './App.css'

export const GlobalCtx = React.createContext(null)

const [gState, gStateSet] = React.useState({ursl: "http://localhost:3000"})

const Global = () => {
    return(
        <GlobalCtx.Provider value={(gState, setGState)}>
            <div>

            </div>
        </GlobalCtx.Provider>
    )
}

export default Global