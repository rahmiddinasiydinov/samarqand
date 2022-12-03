import styles from './Button.module.scss'
import classnames from 'classnames'

export const Button = ({
    withBorder, 
    children, 
    onClick, 
    color,  
    contained, 
    link, 
    light, 
    margin, 
    fontSize }) => {
    
    const getClassnames = () =>{
        return classnames(styles.button, {[styles.withBorder]: withBorder}, {[styles.contained]: contained && !light }, {[styles.light]: light && contained})   
    }
    return (
        link ? <a className={getClassnames()} onClick={onClick} href={link} style={{color, margin, fontSize}}>{children}</a>: 
        <button className={getClassnames()} onClick={onClick} style={{color, margin, fontSize}}>
        {children}
        </button>)
    }
    