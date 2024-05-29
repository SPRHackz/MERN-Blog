import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { About, Dashboard, Home, Projects, SignIn, SignUp } from "./pages"
import { Header } from "./Components"


const App = () => {
  return (
    <Router>
    <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
       </Routes>
    </Router>
  )
} 

export default App