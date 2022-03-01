
import './App.css';
import Contact from './Pages/Contact/Contact';
import Banner from './Pages/Home/Banner/Banner';
import Offer from './Pages/Home/Offer/Offer';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App bg-dark">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Offer></Offer>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
