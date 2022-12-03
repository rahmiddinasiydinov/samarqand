import styles from './SideMenu.module.scss'
import { Button } from './Button'
import { Select } from './Select'
import classNames from 'classnames'


export const SideMenu = ({enabled, toggleMenu}) => {
    const getClassNames = () => classNames(styles.menu, {[styles.active]:enabled})
    return (<div className={getClassNames()}>
        <ul className={styles.list}>
            <li className={styles.option}><Button onClick={toggleMenu} color={'#ffffff'} margin={'20px'} fontSize={'24px'} link='#aboutUs'>About us</Button></li>
            <li className={styles.option}><Button onClick={toggleMenu} color={'#ffffff'} margin={'20px'} fontSize={'24px'} link='#work'>Work</Button></li>
            <li className={styles.option}><Button onClick={toggleMenu} color={'#ffffff'} margin={'20px'} fontSize={'24px'} link='#contact'>Contacts</Button></li>
            <li className={styles.option}><Select color={'#ffffff'} margin={'20px'} fontSize={'24px'} options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/></li>
        </ul>
    </div>)
}