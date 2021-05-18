import image1 from '../../assets/images/portfolio/portfolio-1.jpg';
import image2 from '../../assets/images/portfolio/portfolio-2.jpg';
import image3 from '../../assets/images/portfolio/portfolio-3.jpg';
import image4 from '../../assets/images/portfolio/portfolio-4.jpg';
import image5 from '../../assets/images/portfolio/portfolio-5.jpg';
import image6 from '../../assets/images/portfolio/portfolio-6.jpg';
import image7 from '../../assets/images/portfolio/portfolio-7.jpg';
import image8 from '../../assets/images/portfolio/portfolio-8.jpg';
import image9 from '../../assets/images/portfolio/portfolio-9.jpg';

type Props = {
    current: number
}
const images = [
    image1, image2, image3, image3, image4,
    image5, image6, image7, image8, image9
]
const PortofolioImages = ({ current }: Props) => {

    return (
        <>
            {images.map((item, index) => {
                return (
                    <img
                        src={item}
                        alt="portofolio image"
                        className={index === current ? 'portfolio__image portfolio__image__visible' : 'portfolio__image'}
                    />
                )
            })}
        </>
    )
}

export default PortofolioImages
