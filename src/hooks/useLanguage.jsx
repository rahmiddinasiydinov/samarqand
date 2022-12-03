import { useState } from "react"


export const useLanguage = () => {
    const [lang, setLanguage] = useState(JSON.parse(window.localStorage.getItem('language')) || 'uz');
    const changeLang = (changedLang) => setLanguage(changedLang)

    return {
        lang, 
        changeLang
    }
} 