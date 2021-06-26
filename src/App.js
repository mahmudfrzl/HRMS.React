
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Layouts/Dashboard';
import Navi from './Layouts/Navi';
import { Container} from 'semantic-ui-react'
import JobAdvertisementAddList from './Pages/JobAdvertisementAddList';
import { Route } from 'react-router'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ResumeList from './Pages/ResumeList';

function App() {
  return (
    <div className="App"> 
      <Navi/>
      <Container className="main">
      <Dashboard/>
      <Route path="/addadvert" component={JobAdvertisementAddList} />
      <Route path="/resume/:id" component={ResumeList} />
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop
        closeOnClick={false}
        pauseOnFocusLoss={false}
      />
      
  
      
    </div>
  );
}

export default App; 
