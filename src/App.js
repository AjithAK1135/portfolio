import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Views/Home';
import Footer from './Components/Footer/Footer';

function App() {
      return(
           <div className='main_wrapper'>
                  <Header />
                  <Home />
                  <Footer />
           </div>
      );
}

export default App;
