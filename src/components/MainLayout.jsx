import classNames from 'classnames'
import { Experience } from './Experience'
import styles from './Main.module.scss'
import { Tradition } from './Tradition'

export const MainLayout = () => {
    const getClassnames = () => classNames(styles.main)
    return(<main className={getClassnames()}>
        <Tradition/> 
        <Experience/>       
    </main>)
}