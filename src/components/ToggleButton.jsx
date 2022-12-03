import classNames from 'classnames'
import styles from './ToggleButton.module.scss'

export const ToggleButton = ({toggleMenu, enabled}) => {
    return   <button onClick={toggleMenu} className={classNames(styles.wrapper, {[styles.wrapperEnabled]:enabled})}>
    <div className={classNames(styles.line, {[styles.upper]:enabled}, {[styles.menuEnabled]: enabled})}></div>
    <div className={classNames(styles.line, {[styles.medium]:enabled}, {[styles.menuEnabled]: enabled})}></div>
    <div className={classNames(styles.line, {[styles.lower]:enabled}, {[styles.menuEnabled]: enabled})}></div>
</button>
}