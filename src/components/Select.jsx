import styles from './Select.module.scss'
import classnames from 'classnames'

export const Select = ({ options }) => {
    const getSelectClassnames = () => classnames(styles.option)
    return (<select className={getSelectClassnames()}>
        {options.map((option, i) => {
            return <option kei={i} className={getSelectClassnames()} value={option.value}>{option.content}</option>
        })}
    </select>)
}