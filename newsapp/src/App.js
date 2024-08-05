import React, {useState, useEffect } from "react";

const App = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('kenya-politics');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=')

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  useEffect(()=> {
  // fetch news
  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(err => console.error(err))
  };
  
    fetchNews ();
  }, [url]);

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  return (
    <div>
      <h2>
        News
      </h2>
      <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange}/>        <button>Search</button>
      </form>
      {news.map((n,i) => (<p key={i}>{n.title}</p>))}
    </div>
  )
};

export default App;
