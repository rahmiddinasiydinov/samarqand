import styles from './Work.module.scss'
import Container from './Container'
import classNames from 'classnames'
import leftImage from '../assets/images/work-image-1.png' 
import rightImage from '../assets/images/work-image-2.png' 
import { useTranslation } from 'react-i18next'

export const Work = () => {
    const {t} =useTranslation('translation', {keyPrefix: "work"})
    
    return(<section id='work' className={styles.work}>
        <Container>
           <div className={classNames(styles.wrapper)}>
             <div className={styles.left}>
                <img className={styles.left__image} src={leftImage} alt="work" />
            </div>
            <div className={styles.right}>
                <img className={styles.right__image} src={rightImage} alt="" />
                <div className={styles.content}>
                    <span className={classNames(styles.caption, 'content__caption')}>{ t("caption") }</span>
                    <h2 className={classNames(styles.heading, 'content__heading')}>{ t("title") }</h2>
                    <h3 className={classNames(styles.subheading, 'content__subheading')}>{ t("subtitle") }<br/><span className={classNames( styles.year, 'content__year')}>2020-2022</span></h3>
                    <p className={classNames(styles.text, 'content__text')}>{t("text")}</p>
                </div>
            </div>
           </div>
        </Container>
    </section>)    
}
