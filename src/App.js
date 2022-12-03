import './App.css';
import Navbar from './components/Navbar';
import Profile from './ProfileFolder/Profile'
import Front from './components/Front';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, } from 'react-router-dom'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Front} />
            <Route exact path='/profile' component={Profile} />
          </Switch>

          <Footer />
        </BrowserRouter>

      </div>

    </>

  );
}


export default App;
