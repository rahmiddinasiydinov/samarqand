import styles from './Experience.module.scss'
import Container from './Container'
import classNames from 'classnames'
import experienceImage from '../assets/images/experience.svg'
import { useTranslation } from 'react-i18next'

export const Experience = () =>{
    const {t} = useTranslation('translation', {keyPrefix: 'aboutUs'})

    return (<section id="aboutUs" className={styles.experience}>
        <Container>
        <span className={classNames(styles.caption, 'content__caption')}>{ t('caption') }</span>
        <h2 className={classNames(styles.heading, 'content__heading')}>{ t('title') }</h2>
        <div className={styles.wrapper}>
        <p className={classNames(styles.text, 'content__text')}>{ t('text-1') }
        <br/><br/>
        { t('text-2') }</p>
        <img src={experienceImage} className={styles.image} alt="our_experience" />
        </div>
        </Container>
    </section>)
}