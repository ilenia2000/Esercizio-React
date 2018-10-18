import React, { Component } from 'react';
import logo from './bus-pascal.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 3 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 3 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <header>
           <div>
				<img className='logo' src={logo}/>
				<br/><br/>
				<button onClick={this.IncrementItem}>Clicca per incrementare di 3</button>
				<button onClick={this.DecreaseItem}>Clicca per decrementare di 3</button>
				<button onClick={this.ToggleClick}>
				  { this.state.show ? 'Nascondi Numero' : 'Mostra Numero' }
				</button>
				{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
			</div>
        </header>
      </div>
    );
  }
}

export default App;
