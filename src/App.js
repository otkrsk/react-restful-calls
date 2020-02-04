import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.callMe = this.callMe.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      // this.setState({ contacts: data })
      console.log(data);
    })
    .catch(console.log)
  }

  callMe() {
    const gcp_key=process.env.REACT_APP_GCP_KEY;
    console.log('gcp_key: ', gcp_key);
    const endpoint='https://maps.googleapis.com/maps/api/geocode/json?latlng=3.081851,101.585200&key=' + gcp_key;
    console.log('endpoint: ', endpoint);
    console.log('you clicked');
    fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
      console.log(data.results);
      console.log(data.results[0].formatted_address);
      // this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            <button onClick={this.callMe}>
              Call Me
            </button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;