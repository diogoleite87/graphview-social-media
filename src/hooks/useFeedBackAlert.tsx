import React, { createContext, ReactNode, useState } from 'react'

interface FeedBackAlertContextProps {
    loadingError: boolean,
    setLoadingError: React.Dispatch<React.SetStateAction<boolean>>,
    loadingSuccess: boolean,
    setLoadingSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    loadingMsg: string,
    setLoadingMsg: React.Dispatch<React.SetStateAction<string>>
}

interface FeedBackAlertContextProviderProps {
    children?: ReactNode
}

const DEFAULT_VALUE: FeedBackAlertContextProps = {
    loadingError: false,
    loadingSuccess: false,
    loadingMsg: '',
    setLoadingError: () => { },
    setLoadingSuccess: () => { },
    setLoadingMsg: () => { }
}

const FeedBackAlertContext = createContext<FeedBackAlertContextProps>(DEFAULT_VALUE)

function FeedBackAlertContextProvider({ children }: FeedBackAlertContextProviderProps) {
    const [loadingError, setLoadingError] = useState<boolean>(DEFAULT_VALUE.loadingError)
    const [loadingSuccess, setLoadingSuccess] = useState<boolean>(DEFAULT_VALUE.loadingSuccess)
    const [loadingMsg, setLoadingMsg] = useState<string>(DEFAULT_VALUE.loadingMsg)

    return (
        <FeedBackAlertContext.Provider value={{ loadingError, loadingSuccess, loadingMsg, setLoadingError, setLoadingSuccess, setLoadingMsg }}>
            {children}
        </FeedBackAlertContext.Provider>
    )
}

export { FeedBackAlertContextProvider }
export default FeedBackAlertContext