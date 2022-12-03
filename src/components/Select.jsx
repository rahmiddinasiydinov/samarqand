import styles from './Select.module.scss'
import classnames from 'classnames'

export const Select = ({ options, light, color, margin }) => {
    const getSelectClassnames = () => classnames(styles.select, {[styles.light]: light })
    return (<select className={getSelectClassnames()} style={{color, margin}}>
        {options.map((option, i) => {
            return <option kei={i} className={styles.option} value={option.value} style={{ margin}}>{option.content}</option>
        })}
    </select>)
}