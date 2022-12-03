import styles from './Work.module.scss'
import Container from './Container'
import classNames from 'classnames'
import leftImage from '../assets/images/work-image-1.png' 
import rightImage from '../assets/images/work-image-2.png' 


export const Work = () => {
    
    return(<section id='work' className={styles.work}>
        <Container>
           <div className={classNames(styles.wrapper)}>
             <div className={styles.left}>
                <img className={styles.left__image} src={leftImage} alt="work" />
            </div>
            <div className={styles.right}>
                <img className={styles.right__image} src={rightImage} alt="" />
                <div className={styles.content}>
                    <span className={classNames(styles.caption, 'content__caption')}>Ishimiz</span>
                    <h2 className={classNames(styles.heading, 'content__heading')}>Bizni Ishimiz</h2>
                    <h3 className={classNames(styles.subheading, 'content__subheading')}>Toshkent Islom sivilizatsiyasi markazi uchun qayta yozilgan Qur'on <br/><span className={classNames( styles.year, 'content__year')}>2020-2022</span></h3>
                    <p className={classNames(styles.text, 'content__text')}>J.Ergashov hozirda Qur’onning “Kofi” maktubidagi qadimiy “Usmon Musafiy”ning ikkinchi nusxasi ustida ishlamoqda. U ushbu kitobdan parchani 2020 yilda boshlagan. Kitob taqdimoti 2022-yil sentabr oyiga mo‘ljallangan. Kitobning bir nusxasi Imom Buxoriy muzeyiga topshiriladi.</p>
                </div>
            </div>
           </div>
        </Container>
    </section>)    
}
