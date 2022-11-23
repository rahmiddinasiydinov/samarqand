import styles from './Home.module.scss'
import classnames from 'classnames'
import { Header } from '../components/Header'
import { MainLayout } from '../components/MainLayout'

export const Home = () => {
    const getHomeClassnames = () => {
        return classnames(styles)
    }
    return <div className={getHomeClassnames()}>
        <Header/>
        <MainLayout/>

    </div>
}