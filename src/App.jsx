import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Earnings from './pages/Earnings';
import './App.css';

function App() {
    return (
        <div className='bg-stone-950 w-100 h-screen'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/id/:id' element={<Earnings />} />
            </Routes>
        </div>
    );
}

export default App;
