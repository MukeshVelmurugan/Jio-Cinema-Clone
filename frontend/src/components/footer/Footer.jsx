import React from 'react'
import styles from './footer.module.css'
// import { FaFacebookF } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { FaInstagram } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
        <div className={styles.footer}>
             <div className={styles.items1}>
                <ul>
                <h2>JioCinema</h2>
                    <li>For You</li>
                    <li>Sports</li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                </ul>
             </div>
             <div className={styles.items2}>
                <ul>
                <h2>Support</h2>
                    <li>Help Center</li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                    <li>Content Complaints</li>
                </ul>
                
             </div>
             <div className={styles.dummy}>

             </div>
             <div className={styles.items3}>
                <h2>Connect With Us</h2>
                <img src="https://www.jiocinema.com/images/facebook.svg"/>
                <img src="https://www.jiocinema.com/images/x.svg"/>
                <img src="https://www.jiocinema.com/images/instagram.svg"/>
                <img src="https://www.jiocinema.com/images/youtube.svg"/>

                {/* <FaFacebookF className={styles.icon}/>
                <BsTwitterX className={styles.icon}/>
                <FaInstagram className={styles.icon}/>
                <IoLogoYoutube className={styles.icon}/> */}


             </div>
             <div className={styles.items4}>
                <h2>Download the App</h2>
                <img src="https://www.jiocinema.com/images/googlePlay.svg"/>
                <img src="https://www.jiocinema.com/images/appleStore.svg"/>
                

             </div>
        </div>
        <footer className={styles.copy}>
            <div className={styles.copyrights}>
            <p>Copyright © Star India Private Limited, 2024. All rights reserved.</p>
            </div>

            <div className={styles.downlogo}>
                <img src="https://www.jiocinema.com/images/payments/jio-logo.png" className={styles.image}/>
            </div>
        </footer>
    </>
  )
}

export default Footer