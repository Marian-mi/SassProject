import React, { useEffect, useRef, useState } from 'react'

type Props = {
    title: string;
    count: string;
}

const Stat = ({ title, count }: Props) => {
    const [counter, setCount] = useState(0);
    const counterRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef(setInterval(() => { }));

    const observer = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
            clearInterval(intervalRef.current)
            setCount(0);
            startCounter();
        }
    }, { threshold: 1 });

    const startCounter = () => {
        intervalRef.current = setInterval(() => {
            if (counter > +count) clearInterval(intervalRef.current)
            else setCount((counter) => counter + ~~(+count / 15))
        }, 100)
    }

    useEffect(() => {
        if (counter > +count) {
            clearInterval(intervalRef.current)
        }
    })

    useEffect(() => {
        counterRef.current && observer.observe(counterRef.current);
        return (() => {
            observer.disconnect();
        })
    }, [])

    return (
        <div className="counter__content">
            <p ref={counterRef} className="counter__display-count">
                {counter}
            </p>
            <h6 className="counter__subject">
                {title}
            </h6>
        </div>
    )
}

export default Stat;
