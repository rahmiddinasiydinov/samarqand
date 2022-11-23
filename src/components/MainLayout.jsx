import classNames from 'classnames'
import styles from './Main.module.scss'
import { Tradition } from './Tradition'

export const MainLayout = () => {
    const getClassnames = () => classNames(styles.main)
    return(<main className={getClassnames()}>
        <Tradition/>        
    </main>)
}