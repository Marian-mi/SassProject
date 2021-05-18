import { useEffect } from 'react';
import Cards from './Cards';
import { servicesData } from './ServicesData';

const ServicesIntro = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add('intro-cards__visible')
            }else {
                item.target.classList.remove('intro-cards__visible')
            }
        })
    }, { threshold: 0.2})

    useEffect(() => {
        const cards = document.querySelectorAll<HTMLDivElement>('.intro-cards');
        if (cards) {
            cards.forEach((element) => {
                observer.observe(element);
            })
        }
        return () => {
            observer.disconnect();
        }
    }, [])

    return (
        <div className="services">
            <h2 className="services__title">Services</h2>
            <p className="services__text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <div className="services__cards-container">
                {servicesData.map((item) => (
                    <Cards
                        content={item.text}
                        icon={item.icon}
                        title={item.title}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default ServicesIntro
