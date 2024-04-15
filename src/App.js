import './App.css';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Lobby from './Pages/Lobby';
import Home from './Pages/Home';
import { SocketProvider } from './context/SocketProvider';

function App() {
  return (
    

      <BrowserRouter>
      <SocketProvider>
      <Routes>
        <Route path='/' Component={Lobby}/>
        <Route path="/room/:roomId" Component={Home}/>
      </Routes>
      </SocketProvider>
      </BrowserRouter>
      
     
    
  );
}

export default App;
