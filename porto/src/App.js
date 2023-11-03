import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import Projects from './Projects';

const App = () => {

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Matthew Avrillio | Portfolio</title>
          <meta name="description" content="Matthew Avrillio's portfolio, resume, and list of projects" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,1,0" />
      </Helmet>
      <Header />
      <Hero />
      <div className='flex justify-center '>
        <hr className='border-solid border-slate-800 border-1 w-[80%]'></hr>
      </div>
      <Projects />
      <Footer />
    </div>
    
  );
};

export default App;
