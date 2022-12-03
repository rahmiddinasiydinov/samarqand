import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'
import styles from './Contact.module.scss'
import Container from './Container'

export const Contact = () => {
    const {t} =useTranslation('translation', {keyPrefix: "contact"})

    return (<section id='contact' className={classNames(styles.contact)}>
        <Container>
            <div className={classNames(styles.wrapper)}>
                <div className={classNames(styles.left)}>
                    <h2 className="content__heading">{ t('title') }</h2>
                    <ul className={classNames(styles.list)}>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>{ t('label-address') }</span>
                            <span className={styles.value}>{ t('address-1') }<br />{ t('address-2') }</span>
                        </li>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>{ t('label-phone') }</span>
                            <a href={'tel:+998 97 916 69 09'} className={styles.value}>{ t('phone') }</a>
                        </li>
                        <li className={classNames(styles.item)}>
                            <span className={styles.label}>{ t('label-email') }</span>
                            <a href='mailto:info@azzavajallagmail.uz' className={styles.value}>{ t('email') }</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <h3 className={classNames(styles.form__title)}>{ t('form-title') }</h3>
                    <form action="" className={classNames(styles.form)}>
                    <input type="text" className={classNames('input', styles.input)} placeholder={ t('placeholder-name') }/>
                    <input type="tel" className={classNames('input', styles.input)} placeholder={ t('placeholder-phone') }/>
                    <input type="email" className={classNames('input', styles.input)} placeholder={ t('placeholder-email') }/>
                    <textarea className={classNames('textarea', styles.textarea)} placeholder={ t('placeholder-message') }></textarea>
                    <Button contained>{ t('send') }</Button>
                    </form>


                </div>
            </div>
        </Container>
    </section>)
}