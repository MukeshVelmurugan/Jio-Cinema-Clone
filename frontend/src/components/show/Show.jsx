import React from 'react'
import styles from './show.module.css'
const Show = (props) => {
  return (
    <>
        <div className={styles.showsChild}>
                <img src={props.movie.imageUrl} alt='image'/>
                <div className={styles.movieTitle}>
                    {props.movie.name}
                </div>

        </div>
    </>
  )
}

export default Show