import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitor from './components/AddVisitor';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddVisitor/>}/>
    <Route path="/viewall" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;