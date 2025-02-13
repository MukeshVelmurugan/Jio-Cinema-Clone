import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Tags from '../components/tags/Tags'
import Channel from '../components/channel/Channel'
import Carousel from '../components/carousel/Carousel'
import Featured from '../components/featured/Featured'
import Shows from '../components/shows/Shows'
import Language from '../components/language/Language'
import Footer from '../components/footer/Footer'

const Home = () => {

  let [movies,setMovies] = useState([]);
  let [featuredMovies,setFeaturedMovies] = useState([])
  let [actionMovies,setActionMovies] = useState([])
  let [hindiMovies,setHindiMovies] = useState([])
  let [englishMovies,setEnglishMovies] = useState([])
  let [topRatedMovies,setTopRatedMovies] = useState([])
  let [teluguMovies,setTeluguMovies] = useState([])
  let [kannadaMovies,setKannadaMovies] = useState([])
  let [malayalamMovies,setMalayalamMovies] = useState([])
  let [tamilMovies,setTamilMovies] = useState([])
  let [koreanMovies,setKoreanMovies] = useState([])
  let [romanceMovies,setRomanceMovies] = useState([])
  let [mysteryMovies,setMysteryMovies] = useState([])
  
  useEffect(async ()=>{
      try{
        
        let movieResponse = await fetch("http://localhost:3000/movies")
        let moviesData = await movieResponse.json()
        console.log(moviesData)
        setMovies(moviesData)

        // filter for the featured movies
        let featMovies = moviesData.filter((movie)=>{return movie.featured===true})
        console.log(featMovies)
        setFeaturedMovies(featMovies.slice(0,5))


        // filter for the action movies
        let actMovies = moviesData.filter((movie)=>{return movie.genre.includes("Action")})
        console.log(actMovies)
        setActionMovies(actMovies.slice(0,6))

        // filter for the hindi movies
        let hinMovies = moviesData.filter((movie)=>{return movie.language==="Hindi"})
        console.log(hinMovies)
        setHindiMovies(hinMovies.slice(0,6))

        // filter for the english movies
        let engMovies = moviesData.filter((movie)=>{return movie.language==="English"})
        console.log(engMovies)
        setEnglishMovies(engMovies.slice(0,6))

        // filter for the top rated movies
        let topRatedMovies = moviesData.filter((movie)=>{return movie.imdb>=9.5})
        console.log(topRatedMovies)
        setTopRatedMovies(topRatedMovies.slice(0,6))

        // filter for the telugu movies
        let telMovies = moviesData.filter((movie)=>{return movie.language==="Telugu"})
        console.log(telMovies)
        setTeluguMovies(telMovies.slice(0,6))

        // filter for the kannada movies
        let kanMovies = moviesData.filter((movie)=>{return movie.language==="Kannada"})
        console.log(kanMovies)
        setKannadaMovies(kanMovies.slice(0,6))

        // filter for the korean movies
        let korMovies = moviesData.filter((movie)=>{return movie.language==="Korean"})
        console.log(korMovies)
        setKoreanMovies(korMovies.slice(0,6))

        // filter for the tamil movies
        let tamMovies = moviesData.filter((movie)=>{return movie.language==="Tamil"})
        console.log(tamMovies)
        setTamilMovies(tamMovies.slice(0,6))

        // filter for the malayalam movies
        let malMovies = moviesData.filter((movie)=>{return movie.language==="Malayalam"})
        console.log(malMovies)
        setMalayalamMovies(malMovies.slice(0,6))

        // filter for the malayalam movies
        let romMovies = moviesData.filter((movie)=>{return movie.genre.includes("Romance")})
        console.log(romMovies)
        setRomanceMovies(romMovies.slice(0,6))

        // filter for the mystery movies
        let mysMovies = moviesData.filter((movie)=>{return movie.genre.includes("Mystery")})
        console.log(mysMovies)
        setMysteryMovies(mysMovies.slice(0,6))
      }
      catch(error){
        console.log(error)
      }
  },[])

  return (
    <>
    <Header movies = {movies}/>
    <Tags/>
    <Carousel/>
    <Channel/>
    <Featured movies ={featuredMovies}/>
    <Shows title="Top Rated Movies" movies={topRatedMovies}/>
    <Shows title="Action Movies" movies={actionMovies}/>
    <Shows title="Romance Movies" movies={romanceMovies}/>
    <Shows title="Mystery Movies" movies={mysteryMovies}/>
    <Language />
    <Shows title="Tamil Movies" movies={tamilMovies}/>
    <Shows title="Hindi Movies" movies={hindiMovies}/>
    <Shows title="English Movies" movies={englishMovies}/>
    <Shows title="Korean Movies" movies={koreanMovies}/>
    <Shows title="Telugu Movies" movies={teluguMovies}/>
    <Shows title="Malayalam Movies" movies={malayalamMovies}/>
    <Shows title="Kannada Movies" movies={kannadaMovies}/>
    <Footer/>
    </>
  )
}

export default Home