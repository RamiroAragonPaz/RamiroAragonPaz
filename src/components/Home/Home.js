import Loader from 'react-loaders';
import './Home.scss';
import { Link } from 'react-router-dom';


const Home = () => {


    return (
        <div>
            <div className="container home-page">
                <div className="home-text-zone">
                    <h1 className='home-text'> Hi, <br /> I'm
                    <p className='letter-r'>R</p>
                    amiro
                    <br />
                    Blockchain & Frontend Developer<p className='down-slash'>_</p>
                    </h1>
                    <div className='buttons-container'>
                        <Link to="/contact" className='home-flat-button'>CONTACT ME<p className='down-slash'>_</p></Link>
                        <Link to="/portfolio" className='home-flat-button'>SEE MY PROJECTS<p className='down-slash'>_</p></Link>
                    </div>
                </div>
                
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}

export default Home