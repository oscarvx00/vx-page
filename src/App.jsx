import { useState } from 'react'
import styles from './App.module.css'
import video from './assets/main_logo.mp4'
import { CardCarrousel } from './components/card-carousel/card-carousel'
import { CardItemData } from './components/card-carousel/card-item-data'
import {AppData} from './app-data'

function App() {

  return (
    <>
      <div className={styles.top_logo}>
        <video loop autoPlay muted className={styles.top_logo_video}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.card_section}>
        <CardCarrousel items={AppData.experience} title="Experience"/>
        <CardCarrousel items={AppData.education} title="Education" />
        <CardCarrousel items={AppData.projects} title="Projects" />
      </div>
    </>
  )
}

export default App
