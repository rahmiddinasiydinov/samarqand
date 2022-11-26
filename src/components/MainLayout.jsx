import classNames from 'classnames'
import { Experience } from './Experience'
import styles from './Main.module.scss'
import { Tradition } from './Tradition'
import { Work } from './Work'
import { Team } from './Team'
import { Duty } from './Duty'
import { Contact } from './Contact'

export const MainLayout = () => {
    const getClassnames = () => classNames(styles.main)
    return(<main className={getClassnames()}>
        <Tradition/> 
        <Experience/>  
        <Work/>   
        <Team/>  
        <Duty/>
        <Contact/>
    </main>)
}