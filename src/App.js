import React from 'react';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer'
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Goback from '../src/components/go-back/goback'
function App() {
  return (
    <div class="container-sm">
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
    </div>
  );
}
 
export default App;