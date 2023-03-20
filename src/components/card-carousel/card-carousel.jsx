import { useState } from 'react'
import styles from './card-carousel.module.css'
import ReactCardCarousel from "react-card-carousel";
import { CardItem } from './card-item';


export function CardCarrousel({ items, title }) {

    return (
        <div className={styles.card_container}>
            <div className={styles.card_section_title}>{title}</div>
            <ReactCardCarousel >
                {items.map(it => (<CardItem data={it}/>))}
            </ReactCardCarousel>
        </div>
    );

}