import './App.css';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Views/Home';
import { Aboutus } from './Components/Views/Aboutus';

function App() {
      return(
           <div className='main_wrapper'>
                  <Header />
                  <Home />
                  <Aboutus />
           </div>
      );
}

export default App;
