import React from 'react'
import styles from './featuredshow.module.css'

const FeaturedShow = (props) => {
  return (
    <>
        <div className={styles.featuredShow}>
            <img src={props.movie.imageUrl} alt='image'/>
            <div className={styles.movieTitle}>
                {props.movie.name}
            </div>
        </div>
    </>
  )
}

export default FeaturedShow