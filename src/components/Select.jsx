import styles from './Select.module.scss'
import classnames from 'classnames'

export const Select = ({ options, light }) => {
    const getSelectClassnames = () => classnames(styles.select, {[styles.light]: light })
    return (<select className={getSelectClassnames()}>
        {options.map((option, i) => {
            return <option kei={i} className={styles.option} value={option.value}>{option.content}</option>
        })}
    </select>)
}