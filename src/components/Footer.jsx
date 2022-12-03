
import styles from './Footer.module.scss'
import logo from '../assets/images/footer-logo.svg'
import classNames from 'classnames'
import Container from './Container'
import { Select } from './Select'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const {t} = useTranslation('translation', {keyPrefix: "footer"})

    return (
    <footer id='#footer' className={classNames(styles.footer)}>
        <Container>
            <div className={styles.wrapper}>
            <div className={styles.logo}>
               <a href="#header" className={styles.logo__link}>
               <img className={styles.logo__image} src={logo} alt="logo" />
               </a>
            </div>
            <div className={styles.navigation}>
            <div className={styles.column}>
                <h3 className={styles.heading}>{ t('contact-title') }</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="tel:+998 97 916 69 09" className={styles.link}>+998 97 916 69 09</a>
                    </li>
                    <li className={styles.item}>
                        <a href="mailto:info@azzavajallagmail.uz" className={styles.link}>info@azzavajallagmail.uz</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#contact" className={styles.link}>{ t('telegram') }</a>
                    </li>
                </ul>
            </div>
            <div  className={styles.column}>
                <h3 className={styles.heading}>{ t('map') }</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#aboutUs" className={styles.link}>{ t('aboutUs') }</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#work" className={styles.link}>{ t('work') }</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#team" className={styles.link}>{ t('team') }</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#duty" className={styles.link}>{ t('duty') }</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#contact" className={styles.link}>{ t('contact') }</a>
                    </li>
                </ul>
            </div>
            <div  className={styles.column}>
                <h3 className={styles.heading}>{ t('label-address') }</h3>
                <span className={styles.address}>{ t('address-1') } <br /> { t('address-2') }  <br /> { t('address-3') } </span>
            </div>
            <div  className={styles.column}>
                <Select light options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/>
            </div>
            </div>
            </div>
        </Container>
    </footer>
)}