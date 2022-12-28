import './App.css';
import Header from "./Components/Navigation/Header";
import Gallery from "./Components/Galery/Gallery";
import BlogPage from "./Components/Blog/Blog";
import {Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={ <Gallery/> }/>
                <Route path="/blog" element={ <BlogPage/> }/>
            </Routes>
        </div>
    );
}

export default App;
