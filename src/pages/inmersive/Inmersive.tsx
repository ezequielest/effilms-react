
import { useEffect } from 'react';
import GaussianViewer from '../../shared/components/gaussian-viewer/GaussianViewer';
//import './Inmersive.scss';

function Inmersive() {
    useEffect(() => {
        if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth', // or 'auto' for instant scroll
            });
        }
        }
    }, [location]);

    return (
        <>
        <div className="">
            <GaussianViewer url='/splats/test2.ply'/>
        </div>
        </>
    );
}

export default Inmersive;
