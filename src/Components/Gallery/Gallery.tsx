import GalleryImages from './GalleryImages';
import { imagesData } from './ImagesSrcs';
import placeHolder from '../../assets/images/PlaceHolder.png';
import { useEffect } from 'react';
import imageLazyLoader from '../Common/ImageLazyLoader';


const Gallery = () => {
    useEffect(() => {
        const cards = document.querySelectorAll<HTMLDivElement>('.gallery__image');
        if (cards) {
            imageLazyLoader(cards);
        }
    }, [])

    return (
        <div className="gallery">
            <h2>
                Gallery
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <div className="gallery__images-container">
                {imagesData.map((item) => (
                    <GalleryImages
                        src={placeHolder}
                        dataSrc={item.src}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery
