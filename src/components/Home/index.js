import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import LogoTitle from "../../assets/images/logo-s.png"
import Logo from "./Logo"
import "./index.scss"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  const nameArray = ["H", "R", "I", "K", "A", "N", "T"]
  const jobArray = [
    "L",
    "e",
    "a",
    "d",
    " ",
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ]
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Shrikant Patil" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2>
            Front End Developer / Full Stack Developer / JavaScript / Angular /
            React / Node JS
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
