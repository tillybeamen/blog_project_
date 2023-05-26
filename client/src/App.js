import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const user = true; // if there is a user logged in...no need to go to register or login page. if statements for register and login to execute this
  return (
    
    // all my routes to different pages
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home/> :<Register/>}></Route>
        <Route path="/login" element={user ? <Home/> :<Login/>}></Route>
        <Route path="/write" element={user ? <Write/> :<Register/>}></Route>
        <Route path="/settings" element={user ? <Settings/> :<Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
      {/* <Register /> */}
      <Footer />
    </Router>
  );
}

export default App;
