
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import Routes from './Pages/Routes';
import GitLink from './utils/icons8-github.gif'
import Linkedin from './utils/icons8-linkedin.gif'


function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App" >
      <p><h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-yellow-100 bg-black font-bold p-4'>
        {
          currentRoute == "/" ? ' Contact Management App' : "Charts and Maps"
          
        }
         
      </h1>
      </p>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='sticky  top-0 h-screen '>
          <SideBar />
        </div>
        <div className='w-full bg-indigo-200'>
          <Routes />
         <p> <a href="https://github.com/ashishvade/ContactManagement.git"><img src={GitLink} ></img></a><a href="https://www.linkedin.com/in/ashish-vade-329932156"><img src={Linkedin}></img></a> </p>
        
        </div>
       
      </div>
     
    </div>
  );
}

export default App;
