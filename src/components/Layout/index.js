import './index.scss';
import Navbar from '../Navbar/navbar';
import ParticleBackground from '../Particles/ParticlesBackground';



const Layout = () => {
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <ParticleBackground />
            </div>
        </div>
    )
}

export default Layout;