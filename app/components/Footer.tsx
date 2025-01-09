import Image from 'next/image'
import React, { JSX } from 'react'

const year = new Date().getFullYear()
const link: Record<string, string> = {
  'facebook': 'https://www.facebook.com/phanthanhnha123200',
  'instagram': 'https://www.instagram.com/phanthanhnha_0117',
  'youtube': 'https://www.youtube.com/channel/UCzDvuSIvBA05Hf9snlmS3TA',
  'linkedin': 'https://www.linkedin.com/in/thanh-nha-will-phan-53715313a',
  'github': 'https://github.com/willphan1712000'
}

const icon: Record<string, JSX.Element> = {
  'facebook': <i className="fa-brands fa-facebook"></i>,
  'instagram': <i className="fa-brands fa-instagram"></i>,
  'youtube': <i className="fa-brands fa-youtube"></i>,
  'linkedin': <i className="fa-brands fa-linkedin"></i>,
  'github': <i className="fa-brands fa-github"></i>
}

const Footer = () => {
  return (
    <div id="footer">
        <div className="logo"><Image src={'/assets/logo.png'} alt='will_logo' width="300" height="200"/></div>
        <h3>Portfolio {year} All rights reserved</h3>
        <div className="social">
          {Object.keys(link).map(item => <a key={item} href={link[item]} target="_blank">{icon[item]}</a>)}
        </div>
    </div>
  )
}

export default Footer