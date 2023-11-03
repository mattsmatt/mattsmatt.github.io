import './App.css';
import Card from './Card.js';

function Projects(){
    return(
        <section className='my-20 text-color-navbar'>
            <div className='text-[2rem] font-semibold my-5'>Projects</div>
            <div id='projects' className='flex justify-center'>
                <div className='w-[80%] flex justify-between items-center flex-wrap'>
                    <Card />
                </div>
            </div>
        </section>
        
    );
}

export default Projects