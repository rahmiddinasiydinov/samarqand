import styles from './Experience.module.scss'
import Container from './Container'
import logo from '../assets/images/experience.svg'
export const Experience = () =>{
    return (<section id="experience" className={styles.experience}>
        <Container>
        <span className={styles.caption}>Biz haqimizda</span>
        <h2 className={styles.heading}>Biz 25 yildan beri xattotlik bilan shug‘ullanamiz</h2>
        <p className={styles.text}>AZZA va JALLA – arab xattotligi va yozuvi sanʼatiga bagʻishlangan loyiha. Yigirma besh yildan ortiq vaqt davomida biz xattotliksiz yashay olmaymiz va shuning uchun biz siz bilan barcha bilim va shaxsiy tajriba, sehr va ilhom bilan bo'lishishga shoshilmoqdamiz.
        <br/><br/>
        Hozir ijodiy laboratoriyamiz mashhur Registon maydonidagi Ulug‘bek madrasasi hujralaridan birida joylashgan.</p>
        </Container>
    </section>)
}