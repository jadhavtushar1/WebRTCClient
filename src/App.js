import './App.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Lobby from './Pages/Lobby';
import Home from './Pages/Home';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Lobby}/>
        <Route path="/room/:roomId" Component={Home}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
