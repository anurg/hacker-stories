import {useEffect, useState} from "react";
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
 
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search")||"React");
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    
  };
  useEffect(()=>{
    localStorage.setItem("search",event.target.value)
  },[searchTerm]);
  
  const filteredStories = stories.filter(story=>story.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <h1>My Hacker Stories - {searchTerm} </h1>
      
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <hr />
      <List list={filteredStories} />
    </div>
  );
};

const Search = ({onSearch,searchTerm}) => 
   (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={onSearch} value={searchTerm} />
      <p>
        Seraching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );


const List = ({list}) => {
  return (
    <>
      <ul>
        {list.map((item) => <Item key={item.objectID} item={item}/>)}
      </ul>
    </>
  );
};

const Item = ({item}) => {
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


