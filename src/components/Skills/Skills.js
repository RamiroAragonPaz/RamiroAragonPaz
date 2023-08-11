import './Skills.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../Firebase/Firebaseconfig'


const Skills = () => {

    
    const [loading, setLoading] = useState(false);
    const [skills, setSkills] = useState([])

    const getSkills = async() => {
        setLoading(true);
        const skillsCollection = collection(db, 'skills');
        const skillsSnapshot = await getDocs(skillsCollection);
        const skillsList = skillsSnapshot.docs.map((doc)=>{
            let skill = doc.data();
            return skill;
        })
        console.log(skillsList);
        const list = [...skillsList].sort((a,b)=>(a.ind > b.ind ? 1 : a.ind < b.ind ? -1 : 0))
        console.log(list)
        setLoading(false)
        return list
    }

    

    useEffect(()=>{
        getSkills()
        .then((projects)=>{setSkills(projects)})        
    },[])






    return (
        <div>
            <div className='portfolio-page'>
                {loading ? (
                    <div></div>
                ):(
                 <div>   
                    <div className='text-zone'>
                        <div className='text-place'>
                            <h1>My <p className='letter-r'>S</p>kills</h1>
                            <div className='text-container'>
                                <p className='text'>This are the main technologies I handle!</p>
                            </div>
                        </div>
                    </div>
                    <div className='skill-container'>
                        <div className='skills'>
                            {skills.map((skill, index)=> {
                                return(
                                    <div className='skill' key={index}>
                                        <div className='image-box'>
                                            <img src={`./${skill.img}`} alt={`Skill ${index}`} id={skill.name || skill.title}/>
                                        </div>
                                        <h1>{skill.title}</h1>
                                        <p className='description'>{skill.category}</p>
                                    </div>
                                )}
                            )}
                        </div>
                    
                    </div>
                </div>
                )}
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}
export default Skills