import styles from './Home.module.scss'
import classnames from 'classnames'
import { Header } from '../components/Header'
import { MainLayout } from '../components/MainLayout'
import { Footer } from '../components/Footer'


export const Home = () => {
    const getHomeClassnames = () => {
        return classnames(styles.home)
    }
    return <div className={getHomeClassnames()}>
        <Header/>
        <MainLayout/>
        <Footer/>
    </div>
}