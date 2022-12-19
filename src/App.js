// import logo from "./logo.svg";
import "./App.css";
// const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React",
};
function getTitle(title) {
  return title;
}
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h3>
        {welcome.greeting} {welcome.title} !! Hello {getTitle("React!!!!")}
      </h3>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
