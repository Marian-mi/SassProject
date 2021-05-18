import Header from './Header/Header';
import GetStarted from './GetStarted/GetStarted';
import IntroVideo from './IntroVideo/MainContainer';
import { lazy, Suspense } from 'react';

const Statics = lazy(() => import('./ServiceStatics/StatsContainer'));
const ServicesIntro = lazy(() => import('./ServicesIntro/ServicesIntro'));
const Portfolio = lazy(() => import('./Portofolio/Potofolio'))

const FirstSection = () => {
    return (
        <>
            <Header />
            <GetStarted />
            <IntroVideo />
            <Suspense fallback={<div>Laoding...</div>}>
                <Statics />
                <ServicesIntro />
                <Portfolio />
            </Suspense>
        </>
    )
}

export default FirstSection
