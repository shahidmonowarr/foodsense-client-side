
import './App.css';
import Contact from './Pages/Contact/Contact';
import Banner from './Pages/Home/Banner/Banner';
import Offer from './Pages/Home/Offer/Offer';
import Services from './Pages/Home/Services/Services';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App bg-dark">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Products></Products>
      <Offer></Offer>
      <Contact></Contact>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
