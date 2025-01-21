import { collection } from '../pictureContent'
import CardElement from './CardElement'

const Card = () => {
    return (
        <div className="flex w-full flex-wrap p-16 gap-6 justify-center items-center max-w-[1500px]">
            {Object.keys(collection).map(key => (
                <CardElement key={key} link={collection[parseInt(key)].link} src={collection[parseInt(key)].src} title={collection[parseInt(key)].title} des={collection[parseInt(key)].des} />
            ))}
        </div>
    )
}

export default Card
