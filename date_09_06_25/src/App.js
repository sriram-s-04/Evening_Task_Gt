import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navg from './components/Navg';

  import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path="/nav" element={<Navg />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
