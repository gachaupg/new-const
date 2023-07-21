import logo from './logo.svg';
import './App.css';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      hello
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>

<Route path='/services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
