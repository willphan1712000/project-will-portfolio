import React from 'react'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div id="footer">
        <div className="logo"></div>
        <h3>Portfolio {year} All rights reserved</h3>
    <div className="social"></div>
</div>
  )
}

export default Footer