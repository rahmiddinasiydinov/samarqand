
import styles from './Footer.module.scss'
import logo from '../assets/images/footer-logo.svg'
import classNames from 'classnames'
import Container from './Container'
import { Select } from './Select'

export const Footer = () => {
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
                <h3 className={styles.heading}>Kontaktlar</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="tel:+998 97 916 69 09" className={styles.link}>+998 97 916 69 09</a>
                    </li>
                    <li className={styles.item}>
                        <a href="mailto:info@azzavajallagmail.uz" className={styles.link}>info@azzavajallagmail.uz</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#contact" className={styles.link}>Telegram</a>
                    </li>
                </ul>
            </div>
            <div  className={styles.column}>
                <h3 className={styles.heading}>Sayt xaritasi</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#aboutUs" className={styles.link}>Biz haqimizda</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#work" className={styles.link}>Ishimiz</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#team" className={styles.link}>Bizning jamoamiz</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#duty" className={styles.link}>Biz nima qiliyapmiz</a>
                    </li>
                    <li className={styles.item}>
                        <a href="#contact" className={styles.link}>Bog'lanish</a>
                    </li>
                </ul>
            </div>
            <div  className={styles.column}>
                <h3 className={styles.heading}>Manzil</h3>
                <span className={styles.address}>Uzbekistan, Samarkand, <br /> Registan Square, <br /> Ulugbek Madrasah</span>
            </div>
            <div  className={styles.column}>
                <Select light options={[{value:'en', content:"Eng"},{value:'ru', content:"Rus"}, {value:'uz', content:"Uzb"}]}/>
            </div>
            </div>
            </div>
        </Container>
    </footer>
)}