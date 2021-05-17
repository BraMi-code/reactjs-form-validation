
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        username: '',
        email: '',
        password: ''
      },
      errors: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["email"] = "";
      input["password"] = "";
      this.setState({input:input});

      alert('Demo Form is submitted!');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your name";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email address";
    }
    else if (typeof input["email"] !== undefined) {
      var pattern =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password";
    }
    if (input["password"].length < 7) { 
      isValid = false;
      errors["password"] = "Your password need to have at least 7 or more characters"
    }
    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:
          <input type="text" name="username" placeholder="Enter your name" value={this.state.input.username} onChange=
        {this.handleChange} id="username" />
        </label><br />
        <div className="text-danger">{this.state.errors.username}</div>

        <label htmlFor="email">E-mail:
          <input type="text" name="email" placeholder="johndoe@mail.com" value={this.state.input.email} onChange=
        {this.handleChange} id="email" /> 
        </label><br />
        <div className="text-danger">{this.state.errors.email}</div>

        <label htmlFor="password">Password:
          <input type="text" name="password" placeholder="Enter your password" value={this.state.input.password} onChange=
        {this.handleChange} id="password" />
        </label><br />
        <div className="text-danger">{this.state.errors.password}</div>


        <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;