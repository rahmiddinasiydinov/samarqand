import styles from './Button.module.scss'
import classnames from 'classnames'

export const Button = ({withBorder, children, onClick, color}) => {
    
    const getClassnames = () =>{
        return classnames(styles.button, {[styles.withBorder]: withBorder})   
    }
    return (
        <button className={getClassnames()} onClick={onClick} style={{color: color}}>
            {children}
        </button>)
    }
