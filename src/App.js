import './style/style.css';
import Sidebar from './components/Sidebar';
import { AboutGreen, Company, Contact, DeApp, Footer} from './components';
function App() {
  return (
    <>
 
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} className="test" />
          <div className="App-Container" id="outer-container">
   
            <div id="page-wrap">
            
              <AboutGreen/>
              <DeApp/>
              <Company/>
              <Contact/>
              <Footer/>
            </div>
          </div>
          {/* <DeApp/> */}
    </>

  );
}

export default App;