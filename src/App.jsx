import logo from './logo.svg';
import './App.css';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      hello
      <BrowserRouter>
      <Routes>
<Route path='/services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
