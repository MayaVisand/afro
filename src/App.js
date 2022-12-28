import logo from './logo.svg';
import './App.css';

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
