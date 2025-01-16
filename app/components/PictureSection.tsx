import Image from 'next/image'

export type Content = Array<{
  heading: string,
  des: string
}>

export type Pictures = string[]

interface Props {
  pictureContent: Content,
  pictures: Pictures
}

const PictureSection = ({pictureContent, pictures}: Props) => {
  return (
    <div className="picture-section md:!flex-row md:!sticky md:!h-screen">
        <div className="picture-section__text md:!overflow-hidden">
          {pictureContent.map(item => (
              <div key={item.heading} className="picture-section__text--section md:!h-full">
                <div className="heading"><h1 className='text-[30px]'>{item.heading}</h1></div>
                <div className="des"><h3 className='text-[22px]'>{item.des}</h3></div>
              </div>
          ))}
        </div>
        <div className="picture-section__pics md:!flex rounded-[3rem] border-[1px] border-black overflow-hidden">
          {pictures.map(item => (
            <div key={item} className="picture-section__pics--section active">
              <Image draggable="false" src={item} alt="will_picture" width="1000" height="1000" />
            </div>
          ))}
        </div>
    </div>
  )
}

export default PictureSection
