import './App.css';
import { SheetContext, SheetState } from '../Context/context';
import React from 'react';
import Navigation from '../Navigation/navigation';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/logo.png';
import line from '../../assets/images/line.png';

class App extends React.Component {

  state = {
    ...SheetState,
    update: (state) => this.setState(state)
  };

  render() {

    return (
      <SheetContext.Provider value={this.state}>
        <div className="page page_shadow background">
          <div>
            <div className="logo-div">
              <img src={logo} className="logo" alt="logo" />
            </div>
          </div>
          <Navigation />
        </div>
      </SheetContext.Provider>
    );
  }
}

export default App;
