import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/Sandli's Resume.pdf"
import SGCartoon from "../assets/sandli_cartoon.avif"
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { Icon } from '@iconify/react';

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/sandli07goyal/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/Sandli07goyal",
      icon: <FaGithub />,
    },
    {
      href: "https://x.com/Sandli07goel",
      icon: <FaTwitter />,
    },
    {
      href: "https://leetcode.com/u/sandligoyal/",
      icon: <Icon icon="simple-icons:leetcode" />,
    }, 
    {
      href: "https://www.geeksforgeeks.org/user/sandli0ojzh/",
      icon: <Icon icon="simple-icons:geeksforgeeks" />,
    }, 
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            SANDLI
            <span className="text-primary" style={{paddingLeft: '2vw'}}>GOEL</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Nothing is Impossible!
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <br />
            <a href="mailto:001sandligoel@gmail.com" className='home-mail'>
              001sandligoel@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Sandli Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
        I am a third-year undergraduate Artificial Intelligence & Machine Learning and Technology Student at MAIT. I am always open to challenges that helps me in developing skills & abilities. Apart from that I am
a code enthusiast who enjoys experimenting latest technologies. As for my future, I hope to one day work as a Machine Learning Expert, work with a diverse team and solve complex problems.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
