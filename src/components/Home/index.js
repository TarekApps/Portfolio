import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["T", "a", "r", "e", "k"]
  const jobArray = ["J", "u", "n", "i", "o", "r", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i, </span>

        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray} 
          idx={15}/>
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray} 
          idx={22}/>
        </h1>
        <h2>Web Developer / Frontend Developer / Backend Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
