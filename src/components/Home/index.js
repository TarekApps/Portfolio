import { Link } from 'react-router-dom'
import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Tarek
          <br />
          Junior Developer
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
