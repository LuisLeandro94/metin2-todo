import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./shared/components/Home";
import List from './shared/components/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='list' element={<List />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
