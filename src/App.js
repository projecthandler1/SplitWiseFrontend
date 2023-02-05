import Layout from "./components/ui/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from '../src/components/Auth/Login'
import SignUp from '../src/components/Auth/SignUp'
function App() {
  return (
    <Router>
    <Layout >
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/Contact' element={<Contact />}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;

// 