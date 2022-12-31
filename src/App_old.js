import "./App.css";
import React from "react";

const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React 18",
};

function getTitle(title) {
  return title;
}
function App() {
  console.log("App renders");
  const stories = [
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
  return (
    <div>
      <h3>Hello {getTitle("React 16")}!! </h3>
      <h2>
        {welcome.greeting} {welcome.title}
      </h2>
      <List list={stories} />
      <Search />
    </div>
  );
}
function Search() {
  console.log("Search renders");
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

function List(props) {
  console.log("List renders");
  return (
    // <ul>
    //   {props.list.map(function (item) {
    //     return (
    //       <li key={item.ObjectId}>
    //         <div>
    //           <a href={item.url}>{item.title}</a>
    //         </div>
    //       </li>
    //     );
    //   })}
    // </ul>
    <ul>
      {props.list.map((item) => (
        <Item key={item.ObjectId} item={item} />
      ))}
    </ul>
  );
}

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.poinits}</span>
  </li>
);
export default App;
