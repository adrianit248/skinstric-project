import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        
        {/* <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:id" element={<ItemDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
