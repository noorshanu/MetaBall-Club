import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Disclaimer from './Pages/Disclaimer';

import Home from './Pages/Home'
import Terms from './Pages/Terms';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/disclaimer" element={<Disclaimer/>}/>
          <Route exact path="/terms" element={<Terms/>}/>
        </Routes>
     
    </Router>
  );
}

export default App;
