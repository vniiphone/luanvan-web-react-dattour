import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodos from './Todos/ListTodos';
import {ToastContainer, toast} from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/NavBar/Navbar';
import Home from './Example/Home';
import ListUser from './Users/ListUsers';
import Categories from './Categories/Categories';
import DetailCategory from './Categories/DetailCategory';
import Tours from './Tours/Tours';
import TourDetail from './Tours/TourDetail';
import HookJS from './Example/Hook';
import SignUp from './Auth/Signup';

function App() {
  return (

    <Router>

      <div className="App">

        <header className="App-header">
          <Nav />

          {/* <MyComponent /> */}

          {/* <ListTodos /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodos />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/users">
              <ListUser />
            </Route>
            <Route path="/categories" exact>
              <Categories />
            </Route>
            <Route path="/categorie/:id">
              <DetailCategory />
            </Route>
            <Route path="/tours" exact>
              <Tours />
            </Route>
            <Route path="/tour/:id">
              <TourDetail />
            </Route>
            <Route path="/hooks" exact>
              <HookJS />
            </Route>

            <Route path="/sign-up" exact>
              <SignUp />
            </Route>


          </Switch>

        </header>



        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div >
    </Router>
  );
}

export default App;
