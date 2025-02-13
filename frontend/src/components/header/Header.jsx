import styles from './Header.module.css'
import React, { useState, useEffect } from 'react'
import JClogo from '../../assets/jc_logo.svg'
import Crown from '../../assets/crown.svg'
import Sicon from '../../assets/ic_search.svg'
import VSicon from '../../assets/voice-search.svg'
import jioicon from '../../assets/avatar_guest.svg'
import Show from '../show/Show'
import { FaChevronDown } from "react-icons/fa";
const Header = (props) => {
    let navLinks = ["Home","Sports","Movies","TV Shows","More"]
    let [searchTitle,setsearchTitle] = useState("");
    let [filteredMovies,setFilteredMovies] = useState([])

    useEffect(()=>{

        if(searchTitle!==""){
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
            })
            setFilteredMovies(filterMovies)
        }
        else{
            setFilteredMovies([])
        }
    
        

        

    },[searchTitle])

  return (
    <>
        <header className={styles.header}>

            <nav className={styles.navigation}>
                <div className={styles.logo}>
                 <img src={JClogo} alt='logo'/>
                 <div className={styles.premium}><img src={Crown} alt='img'/><p>Go Premium</p></div>
                 </div>

                 <ul className={styles.navLinks}>
                    <li className={styles.navLink}>Home</li>
                    <li className={styles.navLink}>Sports</li>
                    <li className={styles.navLink}>Movies</li>
                    <li className={styles.navLink}>TV Shows</li>
                    <li className={styles.navLink}>More <FaChevronDown className={styles.arrow}/></li>  
                 </ul>

            </nav>

            <div className={styles.search}>
                <div className={styles.searchBox}>
                
                    <div className={styles.searchBar}>
                    <img src={Sicon}/>
                    </div>

                    <input className={styles.searchInput} type='text' onChange={(event)=>{
                        setsearchTitle(event.target.value)
                    }} 
                    
                    placeholder='Movies, Shows and more'></input>
                    
                    <div className={styles.searchBar}>
                    <img src={VSicon}/>
                    </div>
                </div>
                <img className={styles.usericon} src={jioicon} alt='icon'/>
            </div>
        </header>

        {
            filteredMovies.length!==0 ? (
                <div className={styles.searchResults}>
                {
                filteredMovies.map((movie)=>{
                    return <Show movie = {movie}/>
                })
                }
                </div>
            ):null
        }

        
    </>
  )
}

export default Header