import { ReactNode, createContext, useState } from "react";

export type PropsContextType = {
    language: string;
    setLanguage: any;
    mode: string;
    setMode: any;
};

interface IPage {
    children: ReactNode;
}


export const PageStateContext = createContext<PropsContextType>(
    {} as PropsContextType
);


export const PageStatePovider = ({ children }: IPage) => {


    const [language, setLanguage] = useState('katakana');
    const [mode, setMode] = useState('training');

    return (
        <PageStateContext.Provider
            value={{
                language, setLanguage, mode, setMode
            }}
        >
            {children}
        </PageStateContext.Provider>
    );
};
