import classNames from 'classnames'
import { Button } from './Button'
import styles from './Contact.module.scss'
import Container from './Container'

export const Contact = () => {
    return (<section id='contact' className={classNames(styles.contact)}>
        <Container>
            <div className={classNames(styles.wrapper)}>
                <div className={classNames(styles.left)}>
                    <h2 className="content__heading">Biz bilan bog'lanish</h2>
                    <ul className={classNames(styles.list)}>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>Manzil:</span>
                            <span className={styles.value}>Uzbekistan, Samarkand, Registan Square,<br /> Ulugbek Madrasah</span>
                        </li>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>Telefon raqami:</span>
                            <a href={'tel:+998 97 916 69 09'} className={styles.value}>+998 97 916 69 09</a>
                        </li>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>Email adress:</span>
                            <a href='mailto:info@azzavajallagmail.uz' className={styles.value}>info@azzavajallagmail.uz</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <h3 className={classNames(styles.form__title)}>Bizga xabar yuboring</h3>
                    <form action="" className={classNames(styles.form)}>
                    <input type="text" className={classNames('input', styles.input)} placeholder="To'liq ismi sharif*"/>
                    <input type="tel" className={classNames('input', styles.input)} placeholder="Telefon raqami*"/>
                    <input type="email" className={classNames('input', styles.input)} placeholder="e-mail"/>
                    <textarea className={classNames('textarea', styles.textarea)} placeholder='Xabar'></textarea>
                    <Button contained>Xabar yuborish</Button>
                    </form>


                </div>
            </div>
        </Container>
    </section>)
}