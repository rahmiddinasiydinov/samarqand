import classNames from 'classnames'
import styles from './Card.module.scss'

export const Card= ({title, text, image}) =>{

    return(<div>
        <h2 className='content__subheading'>{ title }</h2>
        <p className={classNames(styles.text, 'content__text')}>{text}</p>
        <img src={image} className={classNames(styles.image)} alt="our team" />
    </div>)
}