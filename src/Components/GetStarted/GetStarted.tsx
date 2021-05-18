import React from 'react';
import image from '../../assets/images/hero-img.png';

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className="get-started__content">
                <h3 className="get-started__title">
                    Creating Website That Make You Stop
                    And Stare
                </h3>
                <p className="get-started__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                </p>
                <button>GET STARTED!</button>
            </div>
            <div className="get-started__image">
                <img src={image} alt="presentation" />
            </div>
        </section>
    )
}

export default GetStarted
