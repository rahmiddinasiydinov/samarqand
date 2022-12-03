import styles from './Header.module.scss'
import logo from '../assets/images/logo.svg'
import classnames from 'classnames'
import { Button } from './Button'
import { Select } from './Select'
import Container from './Container'
import { useState } from 'react'
import { SideMenu } from './SideMenu'
import { ToggleButton } from './ToggleButton'
import {useTranslation} from 'react-i18next'

export const Header = () => {

    const [open, setOpen] = useState(false)
    const {t, i18n} = useTranslation('translation', {keyPrefix:'header'})

    const toggleMenu = () => setOpen(!open)    

    const getHeaderClassnames = () => {
        return classnames(styles.header)
    } 

    console.log(i18n.exists('header.work'));

    return (<><header id='header'>
        <Container>
        <div className={getHeaderClassnames()}>
        <img src={logo} alt="logo" className={styles.logo}/>

        <ul className={styles.list}>
            <li className={styles.option}><Button link='#aboutUs'>{ t('aboutUs') }</Button></li>
            <li className={styles.option}><Button link='#work'>{ t('work') }</Button></li>
            <li className={styles.option}><Button link='#contact'>{ t('contact') }</Button></li>
            <li className={styles.option}><Select options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/></li>
            <li className={styles.option}><Button link='#contact' withBorder>{ t('contactUs') }</Button></li>
        </ul>
        <ToggleButton toggleMenu={toggleMenu}  enabled={open}/>
        </div>
    </Container>
    </header>
    <SideMenu toggleMenu={toggleMenu} enabled={open}/>
    </>
    )
    }