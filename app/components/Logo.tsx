import Image from 'next/image'

const Logo = () => {
  return <Image draggable="false" src={'/assets/logo.png'} alt="will_logo" width="300" height="200"/>
}

export default Logo
