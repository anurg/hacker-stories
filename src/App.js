import "./App.css";
const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React 18",
};
const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "jordan Walke",
    num_comments: 3,
    poinits: 4,
    ObjectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov,Andrew Clark",
    num_comments: 6,
    points: 8,
    ObjectId: 1,
  },
];
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h3>Hello {getTitle("React 16")}!! </h3>
      <h2>
        {welcome.greeting} {welcome.title}
      </h2>
      <List />
      <Search />
      <List />
    </div>
  );
}
function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <div>
            <a href={item.url}>{item.title}</a>
          </div>
        );
      })}
    </ul>
  );
}
export default App;
