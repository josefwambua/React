import React, {useState, useEffect } from "react";

const App = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('kenya-politics');


  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  // fetch news
  const fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(err => console.error(err))
  };
  useEffect(()=> {
    fetchNews ()
  },
  [searchQuery]);

  return (
    <div>
      <h2>
        News
      </h2>
      <form>
      <input type="text" value={searchQuery} onChange={handleChange}/>        <button>Search</button>
      </form>
      {news.map((n,i) => (<p key={i}>{n.title}</p>))}
    </div>
  )
};

export default App;
