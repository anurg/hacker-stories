const list = [
  {
    title: "React",
    url: "https://react.dev",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function App() {
  // you can do something in between
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <List />
      <Serach />
      <hr />
      <List />
    </div>
  );
}
function Serach() {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" />
    </>
  );
}
function List() {
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
