import styles from './card-carousel.module.css'

export function CardItem ({data}) {

    const style = {
        background: `linear-gradient(205deg, ${data.topColor} 0%, ${data.botColor} 100%)`,
        color: data.fontColor
    }

    return (
        <div className={styles.card} style={style}>
            <img className={styles.card_logo} src={data.logoSrc}/>
            <p className={styles.card_title}>{data.title}</p>
            {
                data.time ?
                <p className={styles.card_time}>{data.time}</p>
                :
                undefined
            }
        </div>
    )


}