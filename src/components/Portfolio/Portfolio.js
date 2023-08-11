import './Portfolio.scss'
import Loader from 'react-loaders'
import porfolioData from '../../Data/portfolio.json'
import { Link } from 'react-router-dom';
import db from '../Firebase/Firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const Portfolio = () => {


    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([])

    const getProjects = async() => {
        setLoading(true);
        const projectCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectCollection);
        const projectList = projectSnapshot.docs.map((doc)=>{
            let project = doc.data();
            return project;
        })
        console.log(projectList);
        const list = [...projectList].sort((a,b)=>(a.ind > b.ind ? 1 : a.ind < b.ind ? -1 : 0))
        console.log(list)
        setLoading(false)
        return list
    }

    

    useEffect(()=>{
        getProjects()
        .then((projects)=>{setProjects(projects)})        
    },[])


    return(
        <div>
            {loading ? (
                <div className='container portfolio-page'>
                </div>
                ):(
                <div className='container portfolio-page'>
                    <div className='text-zone'>
                        <div className='text-place'>
                            <h1>My <p className='letter-r'>P</p>ortfolio</h1>
                            <div className='text-container'>
                                <p className='text'>This are my featured projects!</p>
                            </div>
                        </div>
                    </div>
                    <div className='images-container'>
                        <div className='projects'>
                        {projects.map((project, index)=> {
                            return(
                                <div className='project' key={index}>
                                    <Link to={`${project.url}`} target='_blank' >
                                        <div className='image-box'>
                                            <img src={`./${project.cover}`} alt={`Project N-${index}`}/>
                                        </div>
                                        <h1>{project.title}</h1>
                                        <p className='description'>{project.description}</p>
                                    </Link>
                                </div>
                            )
                        })}
                        </div>
                    </div>   
                    <div className='final-text'>
                        <p className='text'>Go to my <a className="element-a" target='_blank' rel='noreferrer' href='https://github.com/RamiroAragonPaz'>GitHub</a> to see more projects!</p>
                    </div>
                </div>
                )}
            <Loader type='cube-transition' />
        </div>
    )
}

export default Portfolio;