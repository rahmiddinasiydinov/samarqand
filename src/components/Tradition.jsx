import classNames from 'classnames';
import styles from './Tradition.module.scss';
import Container from './Container';
import {Button} from './Button'
import traditionImage from '../assets/images/tradition.png'
import { useTranslation } from 'react-i18next';

export const Tradition = () => {
    const {t} =useTranslation('translation', {keyPrefix: 'tradition'})
    const getClassnames = () => classNames(styles.tradition)


    return (<section id='tradition' className={getClassnames()}>
            <Container>
                <h1 className={styles.heading}>{ t('heading-1') }<span className={styles.arabic}> { t('arabic') }</span>
                { t('heading-2') }</h1>
                
                 <p className={styles.content}>{ t('subtext') }</p>

                 <div className={styles.article}>
                    <div className={styles.article__text}>
                        <h2 className={styles.article__heading}>{ t('title') }</h2>
                        <p className={classNames(styles.article__content, 'content__text')}>{ t('text-1') } <br/><br/> { t('text-2') }.</p>
                        
                        <Button contained>{ t('contactUs') }</Button>

                    </div>
                    <div className={styles.article__image}>
                        <img width={780} src={traditionImage} className={styles.image} alt="tradition"/>
                        </div>
                 </div>

            </Container>
            
        </section>)
}
