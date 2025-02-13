import React from 'react'
import styles from './channel.module.css'
import ch1 from '../../assets/ch1.png'
import ch2 from '../../assets/ch2.png'
import ch3 from '../../assets/ch3.png'
import ch4 from '../../assets/ch4.png'
import ch5 from '../../assets/ch5.png'
import ch6 from '../../assets/ch6.png'
import ch8 from '../../assets/ch8.png'
import ch9 from '../../assets/ch9.png'

const Channel = () => {
  return (
    <>
        <div className={styles.channel}>

            <img src={ch1} alt='channel'/>
            <img src={ch2} alt='channel'/>
            <img src={ch3} alt='channel'/>
            <img src={ch4} alt='channel'/>
            <img src={ch5} alt='channel'/>
            <img src={ch6} alt='channel'/>
            <img src={ch8} alt='channel'/>
            <img src={ch9} alt='channel'/>
        </div> 
    </>
  )
}

export default Channel