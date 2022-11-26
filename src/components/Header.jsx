import styles from './Header.module.scss'
import logo from '../assets/images/logo.svg'
import classnames from 'classnames'
import { Button } from './Button'
import { Select } from './Select'
import Container from './Container'

export const Header = () => {
    
    const getHeaderClassnames = () => {
        return classnames(styles.header)
    } 

    return (<header id='header'>
        <Container>
        <div className={getHeaderClassnames()}>
        <img src={logo} alt="logo" className={styles.logo}/>

        <ul className={styles.list}>
            <li className={styles.option}><Button link='#aboutUs'>About us</Button></li>
            <li className={styles.option}><Button link='#work'>Work</Button></li>
            <li className={styles.option}><Button link='#contact'>Contacts</Button></li>
            <li className={styles.option}><Select options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/></li>
            <li className={styles.option}><Button link='#contact' withBorder>Contact us</Button></li>
        </ul>

        </div>
    </Container>
    </header>)
    }