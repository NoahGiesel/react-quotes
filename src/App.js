import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://quote-garden.herokuapp.com/api/v2/quotes',
      );
      console.log(result) 
      setData(result.quotes); 
    };
 
    fetchData();
  }, []);
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.data.quotes._id}> {item.data.quotes.quoteAuthor} </li>
      ))}
    </ul>
  );
}
 
export default App;