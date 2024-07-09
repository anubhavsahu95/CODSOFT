import './App.css';
import About from './Components/About/About';
import Dishes from './Components/Dishes/Dishes';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Review from './Components/Review/Review';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Dishes/>
      <About/>
      <Menu/>
      <Review/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
