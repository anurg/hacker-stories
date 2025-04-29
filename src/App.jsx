import { Children, useEffect, useState } from "react";
const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || "React"
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories - {searchTerm} </h1>

      <InputWithLabel id="search" onInputChange={handleSearch} value={searchTerm} isFocused={false} >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      </InputWithLabel>
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

const InputWithLabel = ({ id, value,type="text", onInputChange, isFocused, children }) => (
  <>
    <label htmlFor={id}>Search:</label>
    &nbsp;
    <input type={type} id={id} onChange={onInputChange} value={value} autoFocus={isFocused} />
    <div>
        {children}
    </div>
    
    

  </>
);

const List = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </>
  );
};

const Item = ({ item }) => {
  return (
    <>
      <li>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    </>
  );
};

export default App;
