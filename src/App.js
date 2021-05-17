import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
      <label htmlFor="username">Username:
        <input type="text" name="username" />
      </label><br />
      <label htmlFor="e-mail">E-mail:
        <input type="text" /> 
      </label><br />
      <label htmlFor="password">Password:
        <input type="text" />
      </label><br />
      <input className="submit-btn" type="button" value="submit"></input>
      </form>
    </div>
  );
}

export default App;
