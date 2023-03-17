import { useState } from 'react'
import styles from './App.module.css'
import video from './assets/main_logo.mp4'

function App() {

  return (
    <>
      <div className='container'>
        <div className={styles.top_logo}>
          <video loop autoPlay muted className={styles.top_logo_video}>
            <source src={video} type="video/mp4"/>
          </video>
        </div>
      </div>
    </>
  )
}

export default App
