
import './App.css';
import Layout from './Components/Layouts/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Calendar from './Pages/Calendar/Calendar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   Welcome to Digital Business
    // </div>
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='Calendar' element={<Calendar />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
