import './styles/main.scss';
import FirstSection from './Components/FirstSection';
import { lazy, Suspense } from 'react';
const SecondSection = lazy(() => import('./Components/SecondSection'));

const App = () => {

    return (
        <>
           <FirstSection />
           <Suspense fallback={<div></div>}>
            <SecondSection />
           </Suspense>
        </>
    )
}

export default App

