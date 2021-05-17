import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log('submit clicked');
    alert('Username was submitted: ' + this.state.username + ", e-mail address " + this.state.email + ", password: " + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:
          <input type="text" name="username" value={this.state.username} onChange=
        {this.handleChange} />
        </label><br />
        <label htmlFor="e-mail">E-mail:
          <input type="text" name="email" value={this.state.email} onChange=
        {this.handleChange} /> 
        </label><br />
        <label htmlFor="password">Password:
          <input type="text" name="password" value={this.state.password} onChange=
        {this.handleChange}/>
        </label><br />
        <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
