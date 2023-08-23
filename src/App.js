import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useState } from 'react';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Dashboard from './components/pages/Dashboard';
import Cart from './components/pages/Cart';
import CompletedOrder from './components/pages/CompletedOrder';
import Profile from './components/pages/Profile';
import Product from './components/pages/Product';

function App() {
  let [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
          <Routes>
            {(isLogin) ?
              <Fragment>
                <Route path="/" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/completedOrder" element={<CompletedOrder />} />
                <Route path="/profile" element={<Profile />} />
              </Fragment>
              :
              <Fragment>
                <Route path="/" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
              </Fragment>
            }
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
