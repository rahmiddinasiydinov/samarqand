import classNames from "classnames"
import styles from './Team.module.scss'
import { Card } from "./Card"
import leftImage from '../assets/images/team-image-1.png'
import rightImage from '../assets/images/team-image-2.png'
import Container from "./Container"

export const Team = () => {

    return(<section className={styles.team} id='team'>
        <Container>
        <div className={classNames(styles.wrapper)}>
           <div className={styles.left}>
               {<Card 
               title={'Abdujalil Ergashev'} 
               image={leftImage}
               text={'J.Ergashov azaliy hunarmandchilik an’analarini yangicha mazmun bilan boyitib, qadimiy Samarqand xattoti san’atini yosh avlodga yetkazayotgan ustalardan biridir. Samarqandning qadimiy obidalaridagi barcha bitiklarni o‘qib, tarjima qilgan.'}
               /> 
               }
           </div>                        
           <div className={styles.right}>
               {<Card 
               title={'Sabirova Aziza'}
               image={rightImage}
               text={'2007 yildan bayon hattotlik bilan shug\'ullanadi. Ustozi Ergashev Abdujalil. Xabibulla Solih, Islom Muhammad, Salimjon Badalboevlar dueti oldilar. Samarkand Registon muzeyi Suls Hatidaning 2015-2018 yillar Samarqand kogozida 60/80 dzhilda chop etylgan 1-ilmiy asarlari saklanadi.'}
               />
               }
           </div>
        </div>
        </Container>
    </section>
    
    )
}