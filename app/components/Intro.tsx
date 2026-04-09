import Image from 'next/image'
import home from '../static/home'

const Intro = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 m-[2rem] rounded-[0.7rem] p-[0.15rem]'>
        <div className='bg-white lg:flex-row flex-col' id="introduction">
          <div className="img md:p-[1rem]"><Image draggable="false" src={'/assets/self1.JPEG'} alt="will_intro" width="300" height="200"/></div>
          <div className="text">
              <div className="heading">{home.intro}</div>
              <div className="des">{home.des}</div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Intro
