import styles from './Button.module.scss'
import classnames from 'classnames'

export const Button = ({withBorder, children, onClick, color,  contained, link, light}) => {
    
    const getClassnames = () =>{
        return classnames(styles.button, {[styles.withBorder]: withBorder}, {[styles.contained]: contained && !light }, {[styles.light]: light && contained})   
    }
    return (
        link ? <a className={getClassnames()} href={link}>{children}</a>: 
        <button className={getClassnames()} onClick={onClick} style={{color: color}}>
            {children}
        </button>)
    }
