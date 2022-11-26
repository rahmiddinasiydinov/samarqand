import classNames from "classnames"
import styles from './Duty.module.scss'
import logo from '../assets/images/duty-image.png'
import {Button} from './Button'

export const Duty = () => {
    return (<section id='duty' className={classNames(styles.duty)}>
        <div className={classNames(styles.left)}>
            <img className={classNames(styles.image)} src={logo} alt="author" />
        </div>
        <div className={classNames(styles.right)}>
            <h2 className={classNames(styles.heading, "content__heading")}>Biz nima qilyapmiz</h2>
            <p className={classNames(styles.heading, "content__text")}>Biz Samarqandning meʼmoriy diqqatga sazovor joylarining epigrafik matnlarini restavratsiya qilishda faol ishtirok etamiz, qoʻlda yozilgan kitoblarni restavratsiya qilish, suvenirlar dizayni bilan shugʻullanamiz.
            <br/><br/>
            Sayyohlar iltimosiga ko‘ra qamish va bambuk ruchkalar bilan VII asr texnologiyasi bo‘yicha tayyorlangan tabiiy charm yoki Samarqand qog‘oziga, baxt va farovonlik tilab, ularning nomlarini arabcha yozishning turli uslublari bilan yozamiz.</p>
            <Button light contained>Aloqa</Button>
        </div>
    </section>)
}