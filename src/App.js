import './App.css';
import {Routes, Route} from  'react-router-dom';
import  Home from './pages/Home';
import Header from "./pages/Header";
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">

      {/* header */}
      <Header/>

      {/* routes  */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>

      {/* footer */}
      <Footer/>

    </div>
  );
}

export default App;
