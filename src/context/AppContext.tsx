import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type SectionSuppeted = 'ABOUT' | 'PROJECTS' | 'SKILS' | 'CONTACT';

interface AppContextInterface {
    payload: SectionSuppeted,
    setPayload: Dispatch<SetStateAction<SectionSuppeted>>
}

const DefaultContext: AppContextInterface = {
    payload: 'ABOUT',
    setPayload: () => {}
}

export const AppContext = createContext(DefaultContext);

export const AppProvider = ({children}: {children: ReactNode}) => {
    
    const [payload, setPayload] = useState<SectionSuppeted>('ABOUT');

    return (
        <AppContext.Provider value={{
            payload, 
            setPayload
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);