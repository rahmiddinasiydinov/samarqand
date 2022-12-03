import classNames from "classnames"
import styles from './Team.module.scss'
import { Card } from "./Card"
import leftImage from '../assets/images/team-image-1.png'
import rightImage from '../assets/images/team-image-2.png'
import Container from "./Container"
import { useTranslation } from "react-i18next"

export const Team = () => {
    const {t}= useTranslation('translation', {keyPrefix: "team"})

    return(<section className={styles.team} id='team'>
        <Container>
            <h2 className={classNames(styles.heading,'content__heading')}>{ t("title") }</h2>
        <div className={classNames(styles.wrapper)}>
           <div className={styles.left}>
               {<Card 
               title={ t("name-1") } 
               image={leftImage}
               text={t("text-1")}
               /> 
               }
           </div>                        
           <div className={styles.right}>
               {<Card 
               title={t("name-2")}
               image={rightImage}
               text={t("text-2")}
               />
               }
           </div>
        </div>
        </Container>
    </section>
    
    )
}