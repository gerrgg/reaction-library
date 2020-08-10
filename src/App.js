import React, {Component} from 'react';
import Header from './components/Header'
import Library from './components/Library'
import Footer from './components/Footer'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header />
        <Library />
        <Footer />
      </div>
    )
  }
}

export default App;
