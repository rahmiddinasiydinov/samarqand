import styles from './Button.module.scss'
import classnames from 'classnames'

export const Button = ({withBorder, children, onClick, color,  contained}) => {
    
    const getClassnames = () =>{
        return classnames(styles.button, {[styles.withBorder]: withBorder}, {[styles.contained]: contained})   
    }
    return (
        <button className={getClassnames()} onClick={onClick} style={{color: color}}>
            {children}
        </button>)
    }
