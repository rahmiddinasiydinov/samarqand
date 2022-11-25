import styles from './Button.module.scss'
import classnames from 'classnames'

export const Button = ({withBorder, children, onClick, color,  contained, id, link}) => {
    
    const getClassnames = () =>{
        return classnames(styles.button, {[styles.withBorder]: withBorder}, {[styles.contained]: contained})   
    }
    return (
        link ? <a className={getClassnames()} href={'#'+id}>{children}</a>: 
        <button className={getClassnames()} onClick={onClick} style={{color: color}}>
            {children}
        </button>)
    }
