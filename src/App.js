
import './App.css';
import Layout from './Components/Layouts/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   Welcome to Digital Business
    // </div>
    <div className='dashboard'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
