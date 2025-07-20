import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Testing from './pages/Testing';
import Result from './pages/Result';
import Select from './pages/Select';
import Summary from './pages/Summary';
import Capture from './pages/Capture';
import LoadingCamera from './pages/LoadingCamera';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/result" element={<Result />} />
        <Route path="/select" element={<Select />} />
        <Route path="/loading" element={<LoadingCamera />} />
        <Route path="/camera/capture" element={<Capture />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
