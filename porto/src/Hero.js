import './App.css';
import atsCV from './assets/Matthew Avrillio - ATS CV.pdf';
import designCV from './assets/MATTHEW AVRILLIO - Design CV.pdf';

function Hero(){
    return(
        <section id='about' className='flex justify-center my-10 text-color-navbar'>
            <div className='w-[80%] text-left flex justify-between items-center'>
                <div className='w-2/3 text-left flex flex-col'>
                    
                    <div className='text-[1.25rem] font-light'>Hello! My name is</div>
                    <div className='text-[3rem] font-bold'>Matthew Avrillio</div>
                    <div className='text-[1.75rem] font-semibold'>I am a Software Engineer</div>
                    <div className='flex flex-col gap-5 mt-3'>
                        <p className='text-[1rem] font-light'>
                        Currently, I am an undergraduate student majoring in Computer Science in Bina Nusantara University. I am in my third year, 5th semester specifically, and I am taking the Software Engineering streaming program. I enjoy problem-solving while working with people in a team environment. I am a fast learner and I am competent in working under pressure.</p>

                        <p className='text-[1rem] font-light'>Right now, I am exploring JavaFX and integrating Java with MySQL. I am familiar in HTML, CSS, Java, Python, C, ASP.NET and C#. I am also capable of database querying using MySQL and UI/UX design with Figma.</p>
                    </div>
                    <div className='flex justify-between mt-6'>
                    <a href={atsCV} class="px-5 py-3 rounded-full border-2 border-solid border-blue-700 bg-slate-100 text-blue-700 rounded-full shadow-sm gap-2 flex items-center button-item"><span class="material-symbols-outlined">
draft
</span> Download ATS-Friendly CV</a>
                    <a href={designCV} class="px-5 py-3 rounded-full border-2 border-solid border-blue-700 bg-slate-100 text-blue-700 rounded-full shadow-sm gap-2 flex items-center button-item"><span class="material-symbols-outlined">
draft
</span> Download Design CV</a>
                    </div>
                </div>
                <div className='w-1/4'>
                    <img src={require("./assets/pasfoto.jpg")} alt="Pasfoto" />
                </div>
            </div>
        </section>
    );
}

export default Hero