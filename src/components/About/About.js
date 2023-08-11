import './About.scss'
import '../Home/Home.scss'
import profile from '../../assets/images/profile.jpeg'
import { Link } from 'react-router-dom'
import { Loader } from 'react-loaders'


const About = () => {

    return (
        <div>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>About <p className='letter-r'>M</p>e</h1>
                    <p className='text'>I've graduated in Accounting in the Economics School of the National University of La Plata in Argentina,and I fell in love with programming in the last years so I decided go-all in that world.</p>
                    <p className='text'>I've finished the Frontend Developer Career at the CoderHouse academy and the one about Blockchain Ethereum Solidity developer.</p> 
                    <p className='text'>I've found in the blockchain technology my passion and i'm committed in become a full time professional.</p>
                    <p className='text'>I have a lot of experience working in finances and I'm looking for an opportunity in the WEB3 world, so
                    let's work together!</p>
                    <Link to="/portfolio" className='flat-button'>MY PROJECTS<p className='down-slash'>_</p></Link>
                </div>
                <div className='image-zone'>
                        <img src={profile} alt='profile' />
                </div>
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}
export default About;