import classNames from 'classnames';
import styles from './Tradition.module.scss';
import Container from './Container';
import {Button} from './Button'
import traditionImage from '../assets/images/tradition.png'

export const Tradition = () => {

    const getClassnames = () => classNames(styles.tradition)
    return (<section id='tradition' className={getClassnames()}>
            <Container>
                <h1 className={styles.heading}>Go'zal<span className={styles.arabic}> Arab </span>
                 yozuvi san'ati</h1>
                
                 <p className={styles.content}>Ushbu hurmatga sazovor hunarmandchilik 1400 yildan oshadi. Birinchi Qur'onni yozish uchun qadimgi matnlardan foydalanilgan.</p>

                 <div className={styles.article}>
                    <div className={styles.article__text}>
                        <h2 className={styles.article__heading}>Arab xattotligi o'zini yozgan an'anadir</h2>
                        <p className={classNames(styles.article__content, 'content__text')}>Asrlar davomida xattotlik amaliy faoliyatdan go‘zal yozuv san’atiga aylanib, endi shunchaki muloqot vositasi emas, balki san’at turi va islom madaniy o‘ziga xosligining muhim qismiga aylandi. Bugungi kunda tashrif buyuruvchilar deyarli barcha islom davlatlarida masjid bitiklaridan tortib, zamonaviy sanʼatgacha uning yozuvi izlarini koʻrishlari mumkin. <br/><br/> Samarqandlik zamonaviy xattot Abdujalil Ergashev arab xattotligini qadrlaydi. Amaliyotchi xattot A.Ergashev meʼmoriy yodgorliklarning epigrafik matnlarini tiklashda faol ishtirok etadi.</p>
                        
                        <Button contained>Aloqa</Button>

                    </div>
                    <div className={styles.article__image}>
                        <img width={780} height={900} src={traditionImage} className={styles.image} alt="tradition"/>
                        
                        </div>
                 </div>

            </Container>
            
        </section>)
}
