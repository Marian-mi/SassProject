const LazyLoader = (elementsToObseve: (NodeListOf<HTMLElement>)) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                const src = item.target.getAttribute('datasrc');
                src && item.target.setAttribute('src', src);
                observer.unobserve(item.target);
            }
        })
    }, { threshold: 0.6 })

    elementsToObseve.forEach((element) => {
        observer.observe(element);
    })
}

export default LazyLoader
