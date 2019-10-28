import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      menuStatus: "menu-close"
    }
  }
  handleClick = e => {
    if (this.state.menuStatus === "menu-close"){
      this.setState({menuStatus: "menu-open"})
    } else {
      this.setState({menuStatus: "menu-close"});
    }
  };
  render(){
    return (
      <div className="back-image">
        <nav>
          <h1>Start Bootstrap</h1>
          <img 
            src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"
            alt="ham-btn"
            onClick={this.handleClick}/>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <menu id="menu" className={this.state.menuStatus}>
          <ul className="menu-bar">
           
          </ul>
        </menu>
        <div className="welcome">
        <h2>Welcome To Our Studio!</h2>
        <h3>IT'S NICE TO MEET YOU</h3>
        <button>TELL ME MORE</button>
        </div>
      </div>
      
    );

  }
}

export default App;
