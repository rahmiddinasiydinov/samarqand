import classNames from "classnames"
import styles from './Duty.module.scss'
import logo from '../assets/images/duty-image.png'
import {Button} from './Button'
import { useTranslation } from "react-i18next"

export const Duty = () => {
    const {t} = useTranslation("translation", {keyPrefix: "duty"})

    return (<section id='duty' className={classNames(styles.duty)}>
        <div className={classNames(styles.left)}>
            <img className={classNames(styles.image)} src={logo} alt="author" />
        </div>
        <div className={classNames(styles.right)}>
            <h2 className={classNames(styles.heading, "content__heading")}>{t("title")}</h2>
            <p className={classNames(styles.heading, "content__text")}>{t("text-1")}
            <br/><br/>
            {t("text-2")}</p>
            <Button light contained>{t("contactUs")}</Button>
        </div>
    </section>)
}