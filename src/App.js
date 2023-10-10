import './App.css';
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Spinner from './Components/Common/Spinner';
import Topbar from './Components/Common/Topbar';
import Nabbar from './Components/Nabbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Footer from './Components/Common/Footer';
import Feature from './Pages/Feature';
import Our_Doctors from './Pages/Our_Doctors';
import Appoinment from './Pages/Appoinment';
import Testimonial from './Pages/Testimonial';
import Error_page from './Pages/Error_page';
import Contacts from './Pages/Contacts';
// import About from './Pages/About';

function App() {
  return (
<>

<Routers>
{/* <Spinner/> */}
<Topbar/>
<Nabbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='/Feature' element={<Feature/>}/>
    <Route path='/Our_Doctors' element={<Our_Doctors/>}/>
    <Route path='/Appoinment' element={<Appoinment/>}/>
    <Route path='/Testimonial' element={<Testimonial/>}/>
    <Route path='/Error_page' element={<Error_page/>}/>
    <Route path='/Contacts' element={<Contacts/>}/>
 
  </Routes>
  <Footer/>
</Routers>



</>
  );
}

export default App;
