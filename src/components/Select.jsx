import styles from './Select.module.scss'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

export const Select = ({ options, light, color, margin}) => {
    const {i18n} = useTranslation()
   const {lang, changeLang} = useLanguage()

    const setLanguage = (value) => {
        i18n.changeLanguage(value)
        changeLang(value)
        window.localStorage.setItem('language', JSON.stringify(value))
    }
    const getClassNames = () => classnames(styles.select, {[styles.light]: light })
    
    const handleChange = e => setLanguage(e.target.value) 
    return (<select value={lang} onChange={handleChange} className={getClassNames()} style={{color, margin}}>
        {options.map((option, i) => {
            return <option kei={i} className={styles.option} value={option.value} style={{ margin}}>{option.content}</option>
        })}
    </select>)
}
