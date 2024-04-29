import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/aboutus/Aboutus';
import Templates from './components/templates/Templates';
import Contactus from './components/contact/Contactus';
import Pricing from './components/pricing/Pricing';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import TemplatePreview from './components/templates/TemplatePreview';
import EditTemplate from './components/templates/EditTemplate';
import { ToastContainer, toast } from 'react-toastify';
import TabBox from './components/TabBox';
import Format1 from './components/preview-templates/Format1';
function App() {
  return (
   <>
    <Router>
      
    <Routes>
    <Route exact path={`${"/"}`} Component={Home}/>
    <Route path={`${"/aboutus"}`} Component={Aboutus}/>
    <Route path={`${"/templates"}`} Component={Templates}/>
    <Route path={`${"/contact"}`} Component={Contactus}/>
    <Route path={`${'/pricing'}`} Component={Pricing}/>
    <Route path={`${'/templatepreview'}`} Component={TemplatePreview}/>
    <Route path={`${'/edittemplate'}`} Component={EditTemplate}/>
    <Route path={`${'/Tabbox'}`} Component={TabBox}/>
<Route path={`${'/format1'}`} Component={Format1} />



    </Routes>
    </Router>

    <ToastContainer />

   </>
  );
}

export default App;
