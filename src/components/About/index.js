import { useEffect, useState } from "react"
import {
  faAngular,
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious frontend / full-stack developer eager to contribute
            my skills and expertise to established IT companies. My passion
            centers around harnessing the potential of React and Angular for
            diverse projects infused with cutting-edge technologies. I thrive on
            challenges, continuously honing my design skills while embracing the
            intricacies of development.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            Beyond the realm of coding, my focus extends to my role in family
            life. Embracing the joys of fatherhood, I prioritize and cherish
            these moments. Additionally, my interests span a wide spectrum—from
            a deep-seated love for sports to finding rhythm through dancing, all
            intertwined with an enduring fascination for everything tech-related
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
