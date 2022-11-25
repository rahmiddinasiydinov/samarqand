import styles from './Experience.module.scss'
import Container from './Container'
import classNames from 'classnames'

export const Experience = () =>{
    return (<section id="experience" className={styles.experience}>
        <Container>
        <span className={classNames(styles.caption, 'content__caption')}>Biz haqimizda</span>
        <h2 className={classNames(styles.heading, 'content__heading')}>Biz 25 yildan beri xattotlik bilan shug‘ullanamiz</h2>
        <p className={classNames(styles.text, 'styles.text')}>AZZA va JALLA – arab xattotligi va yozuvi sanʼatiga bagʻishlangan loyiha. Yigirma besh yildan ortiq vaqt davomida biz xattotliksiz yashay olmaymiz va shuning uchun biz siz bilan barcha bilim va shaxsiy tajriba, sehr va ilhom bilan bo'lishishga shoshilmoqdamiz.
        <br/><br/>
        Hozir ijodiy laboratoriyamiz mashhur Registon maydonidagi Ulug‘bek madrasasi hujralaridan birida joylashgan.</p>
        </Container>
    </section>)
}