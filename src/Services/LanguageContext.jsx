import { createContext, useState } from "react"

export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState('uz')

    return <LanguageContext.Provider value={[lang, setLang]}>
        {children}
    </LanguageContext.Provider>
}