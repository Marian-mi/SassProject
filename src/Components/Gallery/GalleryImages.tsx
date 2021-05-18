import React from 'react'

type Props = {
    src: string;
    dataSrc: string;
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        datasrc?: string;
    }
}

const GalleryImages = ({ src, dataSrc }: Props) => {
    return (
        <div className="gallery__images">
            <img className="gallery__image" src={src} alt="galler-image" datasrc={dataSrc}/>
        </div>
    )
}

export default GalleryImages
