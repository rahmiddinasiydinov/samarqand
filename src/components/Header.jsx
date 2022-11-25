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

    return (<Container>
        <div className={getHeaderClassnames()}>
        <img src={logo} alt="logo" className={styles.img}/>

        <ul className={styles.list}>
            <li className={styles.option}><Button id='aboutUs' link>About us</Button></li>
            <li className={styles.option}><Button id='work' link>Work</Button></li>
            <li className={styles.option}><Button id='contact'>Contacts</Button></li>
            <li className={styles.option}><Select id='lang' options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/></li>
            <li className={styles.option}><Button id='contactUs' withBorder>Contact us</Button></li>
        </ul>

        </div>
    </Container>)
    }