import React, {useState, useEffect } from "react";

const App = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=')

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
// loader
const [loading, setLoading] = useState(false);

  // fetch news
  useEffect(()=> {

  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      .then(data => setNews(data.hits), setLoading(false))

      .catch(err => console.error(err))
  };
  setLoading(true);
    fetchNews ();
  }, [url]);

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  };
  const showLoading = () => (loading ? <h2>Loading...</h2> : "");

  const searchForm = () => (
  <form onSubmit={handleSubmit}>
  <input type="text" value={searchQuery} onChange={handleChange}/>        <button>Search</button>
  </form>
  )

  const showNews = () => news.map((n,i) => (<p key={i}>{n.title}</p>));
  return (
    <div>
      <h2>
        News
      </h2>
     {showLoading()}
     {searchForm()}
      {showNews()}
    </div>
  )
};

export default App;
