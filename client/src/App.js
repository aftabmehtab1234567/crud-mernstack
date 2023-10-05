import './App.css';
import Navbar from './component/Navbar';
import Adduser from './component/Adduser';
import Alluser from './component/Alluser';
import Codeforinterview from './component/Codeforinterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Edituser from './component/Edit';
// ...

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/codeforinterview" element={<Codeforinterview />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/alluser" element={<Alluser />} />
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
