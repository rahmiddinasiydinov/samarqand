import classNames from 'classnames';
import styles from './Tradition.module.scss';
import Container from './Container';

export const Tradition = ({left, right, top, bottom, gradientBackground}) => {

    const getClassnames = () => classNames(styles.tradition)
    return (<section className={getClassnames()}>
            <Container>
                <h1 className={styles.heading}>Go'zal arab 
                 yozuvi san'ati</h1>
            </Container>
        </section>)
}