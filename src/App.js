import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Testing from './pages/Testing';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/result" element={<Result />} />
        
        {/* <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
