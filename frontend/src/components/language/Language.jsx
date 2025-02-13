import React from 'react'
import styles from './language.module.css'

const Language = () => {
  return (
    <>  
        <h3 className={styles.lan1}>Watch in Your Language</h3>
        <div className={styles.lan}>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/tamil_1x1-1709298607091.jpg" alt='channel'/>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/hindi_1x1-1709298653281.jpg" alt='channel'/>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/telugu_1x1-1709298686761.jpg" alt='channel'/>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/malayalam_1x1-1709298710540.jpg" alt='channel'/>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/kannada_1x1-1709298556759.jpg" alt='channel'/>
            <img src="https://v3img.voot.com/resizeMedium,w_90,h_90/v3Storage/assets/english-1694341614686.jpg" alt='channel'/>
        </div> 
    </>
  )
}

export default Language