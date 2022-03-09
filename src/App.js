
import { Route, Router, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';
import OrderNow from './Pages/OrderNow/OrderNow';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App bg-dark">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/orderNow/:productId">
              <OrderNow></OrderNow>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path='/manageOrders'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
